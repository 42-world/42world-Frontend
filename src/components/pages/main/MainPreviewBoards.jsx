import styled from 'styled-components';

import { getCategory } from '@common/hooks/api/category';
import { isEmpty } from '@common/utils';
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
          .map(category => <MainPreviewBoard key={category.id} categoryId={category.id} categoryName={category.name} />)
      )}
    </StyledPreviewBoard>
  );
};

const StyledPreviewBoard = styled.div`
  display: flex;
  margin: auto;
`;

export default MainPreviewBoards;
