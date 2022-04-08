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
    ) : linkType === "twitter" ? (
      <IconSet.IconTwitter />
    ) : linkType === "facebook" ? (
      <IconSet.IconFacebook />
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
        onClick={(e) => handleOnClick(e, links[i][0])}>
        {GetIcon(i)}
        <span>{links[i][1]}</span>
      </div>
    );

  return <LinkSectionDiv>{arr}</LinkSectionDiv>;
};

const LinkSectionDiv = styled.div`
  padding: 0.3rem;
  padding-right: 15%;
  border-left: solid ${(props) => props.theme.lineGray1};
  overflow: auto;
  div {
    display: flex;
    align-items: center;
    svg {
      margin: 0.3rem;
      margin-right: 0.6rem;
      width: 1.3rem;
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
  @media screen and (max-width: 530px) {
    padding-right: 5%;
  }
  @media screen and (min-width: 769px) {
    padding-right: 20%;
  }
`;

export default LinkSection;
