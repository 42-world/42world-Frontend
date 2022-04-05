import { useEffect, useState } from "react";
import styled from "styled-components";
import { CheckInService } from "../../../network";
import { rem } from "../../../styles/rem";

import Button from "@mui/material/Button";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ClusterStatus() {
  const [checkInStatus, setCheckInStatus] = useState({
    max: {
      gaepo: 1,
      seocho: 1,
    },
    now: {
      gaepo: 0,
      seocho: 0,
    },
  });

  const getCheckInText = (now, max) => (now ? now + "/" + max : "No Data");

  const fetch = async () => {
    const response = await CheckInService.getClusterStatus();
    setCheckInStatus(response.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  if (!checkInStatus) return <></>;
  return (
    <ClusterStatusWrapper>
      <CheckInHeader>
        <p>클러스터 현황</p>
        <a href="https://cluster.42seoul.io/submit">
          <Button variant="contained">체크인</Button>
        </a>
      </CheckInHeader>
      <CheckInBody>
        <div className="circular_progress_bar_div gaepo">
          <h2>개포</h2>
          <div className="circular_progress_bar">
            <CircularProgressbar
              maxValue={checkInStatus.max.gaepo ? checkInStatus.max.gaepo : 1}
              text={getCheckInText(
                checkInStatus.now.gaepo,
                checkInStatus.max.gaepo
              )}
              value={checkInStatus.now.gaepo}
              strokeWidth={12}
            />
          </div>
        </div>
        <div className="circular_progress_bar_div seocho">
          <h2>서초</h2>
          <div className="circular_progress_bar">
            <CircularProgressbar
              maxValue={checkInStatus.max.seocho ? checkInStatus.max.seocho : 1}
              text={getCheckInText(
                checkInStatus.now.seocho,
                checkInStatus.max.seocho
              )}
              value={checkInStatus.now.seocho}
              strokeWidth={12}
            />
          </div>
        </div>
      </CheckInBody>
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

const CheckInHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.backgroundBlue1};
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1.2rem;
  p {
    font-size: 1rem;
    font-weight: 600;
  }
  a {
    text-decoration: none;
    outline: none;
    border: none;
  }
  button {
    padding: 0.2rem 0.5rem;
    background-color: ${(props) => props.theme.buttonBlue2};
  }
`;

const CheckInBody = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 1.2rem 1.8rem;
  background-color: ${(props) => props.theme.backgroundBlue1};

  .circular_progress_bar_div {
    width: 7.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 0.3rem;
      color: ${(props) => props.theme.textBlack};
    }

    .circular_progress_bar {
      svg {
        path {
          stroke-linecap: butt;
        }
        text {
          font-size: 0.9rem;
          font-weight: 600;
        }
      }
    }
  }

  .gaepo {
    .CircularProgressbar-trail {
      stroke: ${(props) => props.theme.backgroundGray3}80;
    }
    .CircularProgressbar-path {
      stroke: ${(props) => props.theme.primary};
    }
    .CircularProgressbar-text {
      fill: ${(props) => props.theme.textBlack};
      //fill: ${(props) => props.theme.primary};
    }
  }

  .seocho {
    .CircularProgressbar-trail {
      stroke: ${(props) => props.theme.backgroundGray3}80;
    }
    .CircularProgressbar-path {
      stroke: ${(props) => props.theme.primaryEcole};
    }
    .CircularProgressbar-text {
      fill: ${(props) => props.theme.textBlack};
      //fill: ${(props) => props.theme.primaryEcole};
    }
  }
`;

export default ClusterStatus;
