import CategoryList from '@root/common/CategoryList';
import { Body } from '@root/components/atoms/Board';
import { Container } from '@root/components/atoms/global';
import { ArticleContent, Comment } from '@root/components/organisms/article';
import { Advertisement } from '@root/components/organisms/category';
import { ArticleService } from '@root/network';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ArticleDetail = () => {
  const params = useParams();
  const { id } = params;

  const [article, setArticle] = useState();

  useEffect(() => {
    (async () => {
      let data = await ArticleService.getArticleByAritlceId(id);
      setArticle(data);
    })();
  }, []);

  return (
    <ArticleBlock>
      <div className="block category_block">
        <CategoryList categoryId={article?.categoryId} />
      </div>
      <div className="block article_block">
        {article ? (
          <>
            <ArticleContent article={article} />
            <Comment articleId={id} writer={article.writer} />
          </>
        ) : (
          // TODO: 이쁘게 만들기
          <Body>글이 없다</Body>
        )}
      </div>
      <Advertisement />
    </ArticleBlock>
  );
};

const ArticleBlock = styled(Container)`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;

  & > .block {
    margin: 0 0.8rem;
    width: 100%;
  }
  .category_block {
    width: 12rem;
    min-width: 12rem;
  }
  .article_block {
    & > div {
      margin-bottom: 1.5rem;
    }
  }
  ${props => props.theme.mobileSize} {
    margin-top: 0;
    .category_block {
      display: none;
    }
    .article_block {
      margin: 0;
      & > div {
        margin-bottom: 0;
      }
    }
  }
`;

export default ArticleDetail;
