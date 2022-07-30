import { MyArticlePreview, MyArticleBoard, MypageProfile } from '@components/pages/Mypage/components';
import constants from '@components/pages/Mypage/constants';
import { useMypage } from '@components/pages/Mypage/hooks';
import { StyledMypage } from '@components/pages/Mypage/styles';
import QuickLink from '@common/QuickLink/QuickLink';

const Mypage = () => {
  const { articleType, articles, comments, likeArticles } = useMypage();

  return (
    <>
      <StyledMypage>
        <main>
          {articleType ? (
            <MyArticleBoard articleType={articleType} />
          ) : (
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
          )}
        </main>
        <aside>
          <QuickLink />
        </aside>
      </StyledMypage>
    </>
  );
};

export default Mypage;
