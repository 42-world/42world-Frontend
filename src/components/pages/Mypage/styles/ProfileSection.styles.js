import styled from 'styled-components';

const StyledProfileSection = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-grow: 3;
  flex-shrink: 0;
  min-width: 15rem;
  align-items: center;
  .mypage-photo-sect {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img {
      width: 5rem;
      border: 2px solid ${props => props.theme.black};
      border-radius: 50%;
      margin-bottom: 0.5rem;
      @media screen and (max-width: 320px) {
        width: 4rem;
      }
      @media screen and (min-width: 769px) {
        width: 6rem;
      }
    }
    button {
      width: 5rem;
    }
  }
  .mypage-auth-sect {
    padding: 0 0.5rem;
    padding-left: 1rem;
    overflow: hidden;
    h1 {
      height: 2rem;
      margin: 0.1rem;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
      text-overflow: ellipsis;
    }
  }
`;
