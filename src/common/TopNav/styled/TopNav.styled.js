import styled from 'styled-components';

export const StyledTopNav = styled.div`
width: 100%;
background-color: ${props => props.theme.secondary};
color: ${props => props.theme.textWhite};
padding: 0.5rem 2rem;

.top-nav {
  margin: auto;
  display: flex;
  flex-direction: row;
  max-width: 1080px;
  justify-content: space-between;

  & > div {
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-left: 2rem;
  }
  .category-div {
	flex-grow: 1;
  }
}

a {
  color: white;
  text-decoration: none;
}
`;