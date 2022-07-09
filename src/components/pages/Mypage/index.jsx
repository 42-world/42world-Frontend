import { QuickLink } from '@components/organisms/main';
import { MyArticlePreview, MyArticleBoard, MypageProfile } from '@components/pages/Mypage/components';
import constants from '@components/pages/Mypage/constants';
import { useMypage } from '@components/pages/Mypage/hooks';

import { StyledMypage } from '@components/pages/Mypage/styles';

const Mypage = () => {
  const { articleType } = useMypage();

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
                <MyArticlePreview articleType={constants.ARTICLE} />
                <MyArticlePreview articleType={constants.COMMENT} />
                <MyArticlePreview articleType={constants.LIKED} />
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
