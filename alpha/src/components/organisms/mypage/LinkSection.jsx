import React from "react";
import styled from "styled-components";

import IconSet from "../../atoms/Mypage";

const LinkSection = ({ links }) => {
  const GetIcon = (linkType) => {
    return linkType === "github" ? (
      <IconSet.IconGithub />
    ) : linkType === "intra42" ? (
      <IconSet.Icon42 />
    ) : linkType === "linkedin" ? (
      <IconSet.IconLinkedIn />
    ) : linkType === "facebook" ? (
      <IconSet.IconFacebook />
    ) : linkType === "twitter" ? (
      <IconSet.IconTwitter />
    ) : linkType === "solvedac" ? (
      <IconSet.IconSolvedAC />
    ) : undefined;
  };

  const handleOnClick = (e, linkHref) => {
    e.preventDefault();
    console.log("clicked");
    console.log(linkHref); //링크 누르면 이동하도록 수정
  };

  let arr = [];
  for (let i in links)
    arr.push(
      <div
        className="mypage-link"
        key={i}
        onClick={(e) => handleOnClick(e, links[i][0])}
      >
        {GetIcon(i)}
        <span>{links[i][1]}</span>
      </div>
    );

  return <LinkSectionDiv>{arr}</LinkSectionDiv>;
};

const LinkSectionDiv = styled.div`
  padding: 0.3rem;
  padding-right: 1rem;
  border-left: solid ${(props) => props.theme.lineGray1};
  flex-shrink: 1;
  flex-grow: 1;
  overflow: auto;
  div {
    display: flex;
    align-items: center;
    svg {
      margin: 0.3rem;
      margin-right: 0.6rem;
      min-width: 1.3rem;
      width: 1.3rem;
    }
    span {
      max-width: 13rem;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  @media screen and (max-width: 480px) {
    padding: 0.3rem 0.5rem;
    display: flex;
    flex-direction: row;
    border: none;
    border-top: solid ${(props) => props.theme.lineGray1};
    svg {
      margin: 0.3rem;
    }
    span {
      display: none;
    }
  }
`;

export default LinkSection;
