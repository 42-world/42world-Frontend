import styled from 'styled-components';

import { useGetCategory } from '@common/hooks/api/category';
import { isEmpty } from '@common/utils';
import MainPreviewBoard from './MainPreviewBoard';

const MainPreviewBoards = () => {
  const { categories } = useGetCategory();
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
              maxItemCount={10}
            />
          ))
      )}
    </StyledPreviewBoard>
  );
};

const StyledPreviewBoard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default MainPreviewBoards;
