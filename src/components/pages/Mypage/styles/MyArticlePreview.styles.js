import styled from 'styled-components';

import constants from '@components/pages/Mypage/constants';

const StyledMyArticlePreview = styled.div`
  background: ${props => props.theme.white};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};

  margin: 0.5rem 0;

  width: ${props => (props.type === constants.LIKED ? 'calc(100%);' : 'calc(50% - 0.8rem);')};
  .title {
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${props => props.theme.lineGray1};
    h2 {
      display: flex;
      align-items: center;
      font-weight: 700;
      margin: 0.3rem;
    }
    button {
      margin: 0.3rem;
      border: none;
      background: transparent;
      cursor: pointer;
    }
  }
  h3 {
    margin: 0.4rem 0;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .like,
  .comment {
    display: ${props => (props.type === constants.COMMENT ? 'none' : 'block')};
  }
  ${props => props.theme.mobileSize} {
    box-shadow: none;
    border-bottom: 1px solid ${props => props.theme.lineGray1};
    border-radius: 0;
    width: 100%;
    margin: 0;
    .title {
      background-color: ${props => props.theme.backgroundGray2};
    }
  }
`;

export default StyledMyArticlePreview;
