import React from "react";
import styled from "styled-components";

import IconSet from "../../atoms/Mypage";
import MypageData from "../../../datas/mypage";

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
  border: 1px solid black;
  border-left: solid ${(props) => props.theme.lineGray1};
`;

export default LinkSection;
