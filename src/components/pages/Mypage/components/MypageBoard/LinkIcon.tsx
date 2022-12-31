import {
  IconGithub,
  Icon42,
  IconFacebook,
  IconLinkedin,
  IconSolvedac,
  IconTwitter,
} from '@components/pages/Mypage/assets';

interface IProps {
  linkType: string;
}

const LinkIcon = ({ linkType }: IProps) => {
  return (
    {
      github: <IconGithub />,
      intra42: <Icon42 />,
      linkedin: <IconLinkedin />,
      facebook: <IconFacebook />,
      twitter: <IconTwitter />,
      solvedac: <IconSolvedac />,
    }[linkType] || <></>
  );
};

export default LinkIcon;
