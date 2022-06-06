import { getCategory } from 'common/hooks/api/category';
import { isEmpty } from 'common/utils';
import styled from 'styled-components';
import MainPreviewBoard from './MainPreviewBoard';

const Main = () => {
  const { categories } = getCategory();

  console.log(categories);
  return (
    <>
      <div>
        <div>
          <div>검색</div>
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
        </div>
        <div>우측</div>
      </div>
      <div>footer</div>
    </>
  );
};

const StyledPreviewBoard = styled.div`
  width: 75%;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  margin: auto;
`;

export default Main;
