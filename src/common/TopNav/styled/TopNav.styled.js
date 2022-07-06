import styled from 'styled-components';

export const StyledTopNav = styled.div`
  position: fixed;
  display: flex;
  z-index: 999;
  width: 100%;
  min-width: max-content;
  height: ${props => props.theme.topNavHeight};
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.textWhite};
  padding: 0.5rem 2rem;

  .top-nav {
    margin: auto;
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1080px;
    justify-content: space-between;
    align-items: center;

    .category-div {
      margin-left: 2rem;
      flex-grow: 1;
    }
    .category-toggle {
      display: none;
    }
  }

  a {
    color: white;
    text-decoration: none;
  }

  ${props => props.theme.mobileSize} {
    .top-nav {
      .category-div,
      .alarm-button {
        display: none;
      }
      .category-toggle {
        display: flex;
      }
    }
  }
`;

export const TopNavSpace = styled.div`
  display: flex;
  width: 100%;
  height: ${props => props.theme.topNavHeight};
`;
