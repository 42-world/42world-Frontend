import { IconGithub, Icon42, IconFacebook, IconLinkedin, IconSolvedac, IconTwitter } from '../assets';

import { StyledLinkBox } from '../styles';

const LinkBox = ({ linkInfo }) => {
  const linkIcon = {
    github: <IconGithub />,
    intra42: <Icon42 />,
    linkedin: <IconLinkedin />,
    facebook: <IconFacebook />,
    twitter: <IconTwitter />,
    solvedac: <IconSolvedac />,
  }[linkInfo.linkType] || <></>;

  const linkHref =
    {
      github: 'https://github.com/',
      intra42: 'https://profile.intra.42.fr/',
      linkedin: 'https://kr.linkedin.com/',
      facebook: 'https://facebook.com/',
      twitter: 'https://twitter.com/',
      solvedac: 'https://solved.ac/profile/',
    }[linkInfo.linkType] || '';

  const handleClickLink = () => {
    console.log(linkHref); // TODO: 링크 누르면 이동하도록 수정
  };

  return (
    <StyledLinkBox className="mypage-link" onClick={handleClickLink}>
      {linkIcon}
      <span>{linkInfo.linkValue}</span>
    </StyledLinkBox>
  );
};

export default LinkBox;
