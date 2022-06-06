import styled from 'styled-components';

import { getCategory } from 'common/hooks/api/category';
import { isEmpty } from 'common/utils';
import MainPreviewBoard from './MainPreviewBoard';

const MainPreviewBoards = () => {
  const { categories } = getCategory();
  return (
    <StyledPreviewBoard>
      {isEmpty(categories) ? (
        <></>
      ) : (
        categories
          .filter(category => category.isArticleReadable)
          .map(category => (
            <MainPreviewBoard
              key={category.id}
              categoryId={category.id}
              categoryName={category.name}
            />
          ))
      )}
    </StyledPreviewBoard>
  );
};

const StyledPreviewBoard = styled.div`
  width: 75%;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  margin: auto;
`;

export default MainPreviewBoards;
