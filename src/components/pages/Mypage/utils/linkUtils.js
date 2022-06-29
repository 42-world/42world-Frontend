import { IconGithub, Icon42, IconFacebook, IconLinkedin, IconSolvedac, IconTwitter } from '../assets';

const getLinkIconHref = linkInfo => {
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

  return { linkIcon, linkHref };
};

export default getLinkIconHref;
