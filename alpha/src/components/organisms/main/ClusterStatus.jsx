import { useEffect, useState } from "react";
import styled from "styled-components";
import { CheckInService } from "../../../network";
import { rem } from "../../../styles/rem";

function ClusterStatus() {
  const [status, setStatus] = useState();

  const fetch = async () => {
    const response = await CheckInService.getClusterStatus();
    setStatus(response.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleClickClusterStatus = () => {
    window.open("https://cluster.42seoul.io/");
  };

  if (!status) return <></>;
  return (
    <ClusterStatusWrapper onClick={handleClickClusterStatus}>
      <div className="title">클러스터 현황</div>
      <div className="progress-container">
        <ProgressBar
          cluster="개포"
          total={status.max.gaepo}
          current={status.now.gaepo}
        />
        <ProgressBar
          cluster="서초"
          total={status.max.seocho}
          current={status.now.seocho}
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
  padding: ${rem(10)};

  border-radius: ${rem(16)};
  // box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.backgroundBlue1};
  cursor: pointer;

  .title {
    width: 90%;
    font-size: ${rem(16)};
    font-weight: bold;
    text-align: left;
  }

  .progress-container {
    margin: ${rem(12)} 0 ${rem(5)} 0;
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
    font-size: ${rem(12)};
    font-weight: bold;
  }
`;

export default ClusterStatus;
