import styled from 'styled-components';

const StyledMypageProfile = styled.div`
  background-color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.boxShadow};
  width: 100%;
  margin: 1rem 0;
  padding: 0.3rem;
  border-radius: ${props => props.theme.borderRadius};
  .profile-title {
    margin: 1rem 0.8rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
  hr {
    border: 0;
    height: 1px;
    background-color: ${props => props.theme.lineGray1};
  }
  .profile-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (min-width: 481px) {
      flex-direction: row;
    }
    .link-section {
      padding: 0.3rem;
      padding-right: 1rem;
      border-left: solid ${props => props.theme.lineGray1};
      flex-shrink: 1;
      flex-grow: 1;
      overflow: auto;
      @media screen and (max-width: 480px) {
        padding: 0.3rem 0.5rem;
        display: flex;
        flex-direction: row;
        border: none;
        border-top: solid ${props => props.theme.lineGray1};
        svg {
          margin: 0.3rem;
        }
        span {
          display: none;
        }
      }
    }
  }
  ${props => props.theme.mobileSize} {
    box-shadow: none;
    border-bottom: 1px solid ${props => props.theme.lineGray1};
    border-radius: 0;
    margin: 0;
  }
`;

export default StyledMypageProfile;
