import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetArticles } from '@common/hooks/api/article';
import PreviewArticleBoard from '@common/Preview/PreviewArticleBoard';

const MainPreviewBoard = ({ categoryId, categoryName, maxItemCount }) => {
  const navigate = useNavigate();
  const { articles } = useGetArticles(categoryId);
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
