import styled from "styled-components";

const gaepo = {
  cluster: "개포",
  total: 429,
  current: 120,
};

const seocho = {
  cluster: "서초",
  total: 429,
  current: 60,
};

function ClusterStatus() {
  return (
    <ClusterStatusWrapper>
      <div className="title">클러스터 현황</div>
      <div className="progress-container">
        <ProgressBar
          cluster={gaepo.cluster}
          total={gaepo.total}
          current={gaepo.current}
        />
        <ProgressBar
          cluster={seocho.cluster}
          total={seocho.total}
          current={seocho.current}
        />
      </div>
    </ClusterStatusWrapper>
  );
}

const ClusterStatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: inherit;
  padding: 1rem;

  border-radius: 1rem;
  background: ${(props) => props.theme.backgroundBlue1};

  .title {
    width: 90%;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: left;
  }

  .progress-container {
    margin: 2rem 0 0.5rem 0;
    width: 96%;
    display: flex;
    justify-content: space-between;
  }
`;

const ProgressBar = ({ cluster, total, current }) => {
  const radius = 40;

  // 둘레
  const strokeWidth = 12;
  const circumstance = 2 * Math.PI * radius;
  const progress = current / total;
  const dashOffset = circumstance * (1 - progress);
  return (
    <>
      <ProgressBarWrapper
        cluster={cluster}
        circumstance={circumstance}
        dashOffset={dashOffset}
      >
        <svg width="100" height="100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            className="frame"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            className="bar"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumstance}
          />
        </svg>
        <div className="value">
          <span>{cluster}</span>
          <span>
            {current} / {total}
          </span>
        </div>
      </ProgressBarWrapper>
    </>
  );
};

const ProgressBarWrapper = styled.div`
  transform: rotate(-90deg);

  .frame {
    stroke: ${(props) => props.theme.backgroundGray2};
  }

  .bar {
    stroke: ${(props) =>
      props.cluster === "개포"
        ? props.theme.backgroundBlue2
        : props.theme.backgroundBlue4};
    stroke-dashoffset: ${(props) => props.dashOffset};
    animation: ${(props) => props.cluster} 1s ease-in-out;
  }

  @keyframes ${(props) => props.cluster} {
    0% {
      stroke-dashoffset: ${(props) => props.circumstance};
    }
    to {
      stroke-dashoffset: ${(props) => props.dashOffset};
    }
  }

  .value {
    transform: rotate(90deg);

    position: absolute;
    top: 34%;
    left: 28%;

    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export default ClusterStatus;
