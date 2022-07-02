import styled from 'styled-components';
import { rem } from 'styles/rem';

const QuickLinkItem = ({ item }) => {
  const onClick = url => {
    window.open(url);
  };
  return (
    <LinkItem key={item.name} onClick={() => onClick(item.link)}>
      <LinkImg src={item.icon} alt="" />
      <div>
        <LinkName>{item.name}</LinkName>
        <LinkDescription>{item.desc}</LinkDescription>
      </div>
    </LinkItem>
  );
};

const LinkItem = styled.div`
  width: ${rem(240)};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* transition: background 0.5s; */
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.backgroundBlue2};
  }
`;

const LinkName = styled.h2`
  font-size: ${rem(16)};
`;

const LinkDescription = styled.span`
  font-size: ${rem(10)};
`;

const LinkImg = styled.img`
  border-radius: ${rem(10)};
  margin: ${rem(10)} ${rem(10)} ${rem(10)} ${rem(15)};
  width: ${rem(60)};
  height: ${rem(60)};
  background: white;
`;

export default QuickLinkItem;
