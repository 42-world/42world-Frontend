import { getCategory } from 'common/hooks/api/category';
import { isEmpty } from 'common/utils';
import PreviewBoard from './PreviewBoard';

const Main = () => {
  const { isError, categories } = getCategory();
  console.log(categories);
  return (
    <>
      <div>
        <div>
          <div>검색</div>
          <div>
            {isEmpty(categories) ? (
              <></>
            ) : (
              categories
                .filter(category => category.isArticleReadable)
                .map(category => (
                  <PreviewBoard
                    key={category.id}
                    categoryName={category.name}
                  />
                ))
            )}
          </div>
        </div>
        <div>우측</div>
      </div>
      <div>footer</div>
    </>
  );
};

export default Main;
