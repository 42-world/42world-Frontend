/** @jsxImportSource @emotion/react */
import { useLocation } from 'react-router-dom';
import { css } from '@emotion/react';
import { theme } from 'styles/theme';
import { getSearchResults } from 'common/hooks/api/search';
import ArticleListItem from 'common/Board/ArticleListItem';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const { articles } = getSearchResults(query || '');

  return (
    <div>
      <div css={centerContent}>
        <div>
          <ul>
            {articles ? (
              articles.map(article => (
                <li>
                  <ArticleListItem article={article} />
                </li>
              ))
            ) : (
              <div>검색 결과가 없습니다</div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const centerContent = css`
  width: 100%;
  max-width: 900px;
  margin: auto;

  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  box-shadow: ${theme.boxShadow};
  background-color: #fff;
`;

export default SearchResults;
