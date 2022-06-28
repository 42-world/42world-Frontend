import styled from 'styled-components';
import IconSet from './IconSet';

const LinkBox = ({ userName, linkType }) => {
  const getIcon = linkType => {
    switch (linkType) {
      case 'github':
        return <IconSet.IconGithub />;
      case 'intra42':
        return <IconSet.Icon42 />;
      case 'linkedin':
        return <IconSet.IconLinkedIn />;
      case 'facebook':
        return <IconSet.IconFacebook />;
      case 'twitter':
        return <IconSet.IconTwitter />;
      case 'solvedac':
        return <IconSet.IconSolvedAC />;
      default:
        return undefined;
    }
  };

  const getLink = linkType => {
    switch (linkType) {
      case 'github':
        return 'https://github.com/';
      case 'intra42':
        return 'https://profile.intra.42.fr/';
      case 'linkedin':
        return 'https://kr.linkedin.com/';
      case 'facebook':
        return 'https://facebook.com/';
      case 'twitter':
        return 'https://twitter.com/';
      case 'solvedac':
        return 'https://solved.ac/profile/';
      default:
        return undefined;
    }
  };

  const handleClickLink = (e, linkHref) => {
    e.preventDefault();
    console.log('clicked');
    console.log(linkHref); //링크 누르면 이동하도록 수정
  };

  return (
    <LinkBoxDiv
      className="mypage-link"
      onClick={e => handleClickLink(e, getLink(linkType) + userName)}
    >
      {getIcon(linkType)}
      <span>{userName}</span>
    </LinkBoxDiv>
  );
};

const LinkBoxDiv = styled.div`
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
  &:hover {
    cursor: pointer;
  }
`;

export default LinkBox;
