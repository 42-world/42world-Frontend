import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = () => {
  return (
    <StyledTopNavLogo to="/">
      <img
        width="168px"
        height="39px"
        src="/assets/images/logo/Logo@4x.png"
        alt="42서울 로고"
      />
    </StyledTopNavLogo>
  );
};

const StyledTopNavLogo = styled(Link)`
  display: flex;
  align-items: center;
`;

export default Logo;
