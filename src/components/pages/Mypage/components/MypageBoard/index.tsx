/** @jsxImportSource @emotion/react */

import MyArticlePreview from '@components/pages/Mypage/components/MypageBoard/MyArticlePreview';
import MypageProfile from '@components/pages/Mypage/components/MypageBoard/MypageProfile';
import { ARTICLE_TYPE } from '@components/pages/Mypage/utils';
import { useMypageBoard } from '@components/pages/Mypage/hooks';

import { mypageArticle } from '@components/pages/Mypage/styles/MypageBoard.styles';

const MypageBoard = () => {
  const { articles, comments, likeArticles } = useMypageBoard();

  return (
    <>
      <MypageProfile />
      <div css={mypageArticle}>
        <MyArticlePreview
          title="내 게시글"
          type={ARTICLE_TYPE.ARTICLE}
          articleListArray={articles}
          hrefLink="/mypage/article"
        />
        <MyArticlePreview
          title="내 댓글"
          type={ARTICLE_TYPE.COMMENT}
          articleListArray={comments}
          hrefLink="/mypage/comment"
        />
        <MyArticlePreview
          title="좋아요한 게시글"
          type={ARTICLE_TYPE.LIKED}
          articleListArray={likeArticles}
          hrefLink="/mypage/liked"
        />
      </div>
    </>
  );
};

export default MypageBoard;
