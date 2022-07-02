import styled from 'styled-components';

import { Container } from 'components/atoms/global';

const StyledMypage = styled(Container)`
  justify-content: center;
  main {
    margin-top: 1.5rem;
    max-width: 48rem;
    display: flex;
    flex-direction: column;
    .mypage-article {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
  aside {
    display: none;
  }
  ${props => props.theme.mobileSize} {
    main {
      width: 100%;
      margin-top: 0;
    }
  }
  @media screen and (min-width: 1101px) {
    aside {
      margin-top: 2.5rem;
    }
    aside {
      display: block;
      width: 15rem;
      padding-left: 1.25rem;
    }
  }
`;

export default StyledMypage;
