/** @jsxImportSource @emotion/react */

import { useState, useRef, useEffect } from 'react';
import { css } from '@emotion/react';

import { Link } from 'react-router-dom';

import { SITEMAP } from '@common/constants';
import { theme } from '@styles/theme';

const SidebarQuickLinkList = ({ setIsToggled }) => {
  return (
    <div css={sidebarCategoryListStyle}>
      <div css={sidebarCategoryListTitleStyle}>Quick Link</div>
      <div css={sidebarCategoryListItemsStyle}>
        {SITEMAP.map(item => (
          <QuickLinkItem item={item} setIsToggled={setIsToggled} />
        ))}
      </div>
    </div>
  );
};

const QuickLinkItem = ({ item, setIsToggled }) => {
  const onClick = url => {
    setIsToggled(false);
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

const sidebarCategoryListStyle = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  margin-top: 2rem;
  padding: 0 2rem;
`;

const sidebarCategoryListTitleStyle = css`
  padding: 0.5rem 0;
  margin-bottom: 1rem;
  border-bottom: 2px solid ${theme.textWhite};

  color: ${theme.textWhite};
  font-size: 1.7rem;
  font-weight: 800;
`;

const sidebarCategoryListItemsStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;

  color: ${theme.textWhite};
  font-size: 1.5rem;
  font-weight: 600;
`;

const quickLinkItemStyle = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;

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
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }
  span {
    font-size: 0.7rem;
  }
`;

export default SidebarQuickLinkList;
