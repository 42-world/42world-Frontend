import React from 'react';
import { getArticles } from 'common/hooks/api/article';
import { useNavigate } from 'react-router-dom';
import PreviewArticleBoard from 'common/Preview/PreviewArticleBoard';

const MainPreviewBoard = ({ categoryId, categoryName, maxItemCount }) => {
  const navigate = useNavigate();
  const { articles } = getArticles(categoryId);
  const onClick = categoryId => {
    navigate(`/category/${categoryId}`);
  };
  return (
    <PreviewArticleBoard
      categoryName={categoryName}
      onClickHandler={onClick}
      path={categoryId}
      items={articles}
      maxItemCount={maxItemCount}
    />
  );
};

export default MainPreviewBoard;
