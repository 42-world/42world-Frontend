import MyArticlePreview from '@components/pages/Mypage/components/MypageBoard/MyArticlePreview';
import MypageProfile from '@components/pages/Mypage/components/MypageBoard/MypageProfile';
import constants from '@components/pages/Mypage/constants';
import { useMypageBoard } from '@components/pages/Mypage/hooks';

const MypageBoard = () => {
  const { articles, comments, likeArticles } = useMypageBoard();

  return (
    <>
      <MypageProfile />
      <div className="mypage-article">
        <MyArticlePreview
          title="내 게시글"
          type={constants.ARTICLE}
          articleListArray={articles}
          hrefLink="/mypage/article"
        />
        <MyArticlePreview
          title="내 댓글"
          type={constants.COMMENT}
          articleListArray={comments}
          hrefLink="/mypage/comment"
        />
        <MyArticlePreview
          title="좋아요한 게시글"
          type={constants.LIKED}
          articleListArray={likeArticles}
          hrefLink="/mypage/liked"
        />
      </div>
    </>
  );
};

export default MypageBoard;
