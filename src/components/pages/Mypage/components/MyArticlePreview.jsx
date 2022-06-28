import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserService } from 'network';
import { ArticlePreview } from 'components/organisms/main';
import { StyledMyArticlePreview } from '../styles';

import constants from './constants';

const MyArticlePreview = ({ articleType }) => {
  const [articles, setArticles] = useState(null);
  const navi = useNavigate();
  const articleInfo =
    {
      [constants.ARTICLE]: { link: 'article', fetchFunc: UserService.getMyArticles(1), title: '내 게시글' },
      [constants.COMMENT]: { link: 'comment', fetchFunc: UserService.getMyComments(1), title: '내 댓글' },
      [constants.LIKED]: { link: 'liked', fetchFunc: UserService.getLikeArticles(1), title: '좋아요한 글' },
    }[articleType] || '';

  const handleMoreBtnClick = () => {
    navi(`./${articleInfo.link}`);
  };

  useEffect(() => {
    const fetchMyArticles = async () => {
      await articleInfo.fetchFunc;
      setArticles(response.data && response.data.slice(0, 5));
    };

    fetchMyArticles();
  }, [articleType]);

  return (
    <StyledMyArticlePreview articleType={articleType}>
      <div className="title">
        <h2>{articleInfo.title}</h2>
        <button type="button" className="more" onClick={handleMoreBtnClick}>
          {'더 보기 >'}
        </button>
      </div>
      {articles &&
        articles.map(article => (
          <ArticlePreview
            key={article.id}
            id={article.id}
            title={articleType === COMMENT ? article.content : article.title}
            likeCount={articleType ? '' : article.commentCount}
            commentCount={articleType ? '' : article.commentCount}
          /> /* TODO: articleType 들어간 삼항연산자 (47 ~ 48번째 줄) 테스트 필요 */
        ))}
    </StyledMyArticlePreview>
  );
};

export default MyArticlePreview;
