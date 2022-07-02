import styled from 'styled-components';
import { SITEMAP } from '@common/constants';
import QuickLinkItem from './QuickLinkItem';
import { rem } from '@styles/rem';

// TODO: into hamburger menu
function QuickLink() {
  return (
    <QuickLinkWrapper>
      <QuickLinkTitle>Quick Link</QuickLinkTitle>
      <div>
        {SITEMAP.map(item => (
          <QuickLinkItem item={item} />
        ))}
      </div>
    </QuickLinkWrapper>
  );
}

const QuickLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: inherit;
  box-shadow: ${props => props.theme.boxShadow};
  background: ${props => props.theme.backgroundTheme3};
  color: ${props => props.theme.textWhite};

  border-radius: ${rem(10)};
  padding: 0.7rem;
`;

const QuickLinkTitle = styled.div`
  font-size: ${rem(16)};
  text-align: center;
  font-weight: bold;
  padding: ${rem(10)};

  border-bottom: 1.5px solid black;
`;

export default QuickLink;
