import React from 'react';
import { useLocation } from 'react-router-dom';

import { QuickLink } from 'components/organisms/main';
import { MyArticlePreview, MyArticleBoard, MyProfile } from './components';
import StyledMypage from './styles/Mypage.styles';

const Mypage = () => {
  const loc = useLocation();
  const articleType = loc.pathname.split('/')[2];
  const ARTICLE = 1,
    COMMENT = 2,
    LIKED = 3;

  return (
    <>
      <StyledMypage>
        <main>
          {articleType ? (
            <MyArticleBoard
              articleType={articleType === 'article' ? ARTICLE : articleType === 'comment' ? COMMENT : LIKED}
            />
          ) : (
            <>
              <MyProfile />
              <div className="mypage-article">
                <MyArticlePreview articleType={ARTICLE} />
                <MyArticlePreview articleType={COMMENT} />
                <MyArticlePreview articleType={LIKED} />
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
