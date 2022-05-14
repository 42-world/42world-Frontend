import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import { CheckInService } from '../../../network';
import { rem } from '../../../styles/rem';

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

  const getCheckInText = (now, max) => (now ? now + '/' + max : 'No Data');

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
                checkInStatus.max.gaepo,
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
                checkInStatus.max.seocho,
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
  background: ${props => props.theme.backgroundBlue1};
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

const CheckInHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.backgroundBlue1};
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1.2rem;
  width: 100%;
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
    background-color: ${props => props.theme.buttonBlue2};
  }
`;

const CheckInBody = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 1.2rem 1.8rem;
  background-color: ${props => props.theme.backgroundBlue1};
  width: 100%;

  .circular_progress_bar_div {
    width: 7.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 0.3rem;
      color: ${props => props.theme.textBlack};
    }

    .circular_progress_bar {
      margin: 0.3rem;
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
      stroke: ${props => props.theme.backgroundGray3}80;
    }
    .CircularProgressbar-path {
      stroke: ${props => props.theme.primary};
    }
    .CircularProgressbar-text {
      fill: ${props => props.theme.textBlack};
      //fill: ${props => props.theme.primary};
    }
  }

  .seocho {
    .CircularProgressbar-trail {
      stroke: ${props => props.theme.backgroundGray3}80;
    }
    .CircularProgressbar-path {
      stroke: ${props => props.theme.primaryEcole};
    }
    .CircularProgressbar-text {
      fill: ${props => props.theme.textBlack};
      //fill: ${props => props.theme.primaryEcole};
    }
  }
`;

export default ClusterStatus;
