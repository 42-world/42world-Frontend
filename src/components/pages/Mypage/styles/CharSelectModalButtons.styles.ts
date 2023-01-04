import { css } from '@emotion/react';
import { theme } from '@root/styles/theme';

export const charSelectButton = css`
  border: none;
  background: none;
  padding: none;
  margin: 0.3rem;

  &:hover {
    cursor: pointer;
  }
`;

export const charSelectImage = (isSelected: boolean) => css`
  width: 5rem;
  border: 2px solid black;
  border-radius: 4px;

  ${!isSelected &&
  `
	  filter: brightness(50%);
	  transition: filter 0.1s;

	  &:hover {
		filter: brightness(70%);

  `}
`;
