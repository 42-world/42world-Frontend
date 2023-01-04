/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import { SITEMAP } from '@common/constants';

import { theme } from '@styles/theme';

// TODO: into hamburger menu
const QuickLink = () => {
  return (
    <div css={quickLinkWrapperStyle}>
      <div css={quickLinkTitleStyle}>Quick Link</div>
      <div>
        {SITEMAP.map(item => (
          <QuickLinkItem item={item} />
        ))}
      </div>
    </div>
  );
};

const QuickLinkItem = ({ item }) => {
  const onClick = url => {
    window.open(url);
  };

  return (
    <div css={quickLinkItemStyle} key={item.name} onClick={() => onClick(item.link)}>
      <img css={quickLinkItemImageStyle} src={item.icon} alt="" />
      <div css={quickLinkItemInfoStyle}>
        <h2>{item.name}</h2>
        <span>{item.desc}</span>
      </div>
    </div>
  );
};

const quickLinkWrapperStyle = css`
  display: flex;
  flex-direction: column;

  min-width: 15rem;
  width: inherit;
  background: ${theme.backgroundTheme3};
  color: ${theme.textWhite};

  border-radius: 1rem;
  padding: 1rem 0;
`;

const quickLinkTitleStyle = css`
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  padding: 1rem;
`;

const quickLinkItemStyle = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  padding: 0.6rem 1rem;
  /* transition: background 0.5s; */
  cursor: pointer;

  &:hover {
    background: ${theme.backgroundBlue2};
  }
`;

const quickLinkItemImageStyle = css`
  border-radius: 0.5rem;
  margin-right: 0.8rem;
  width: 3.5rem;
  background: white;
`;

const quickLinkItemInfoStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h2 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }
  span {
    font-size: 0.6rem;
  }
`;

export default QuickLink;
