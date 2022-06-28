import React from 'react';
import { useLocation } from 'react-router-dom';

import { QuickLink } from 'components/organisms/main';
import { MyArticlePreview, MyArticleBoard, MyProfile } from './components';
import constants from './components/constants';

import StyledMypage from './styles/Mypage.styles';

const Mypage = () => {
  const loc = useLocation();
  const articleType =
    {
      article: constants.ARTICLE,
      comment: constants.COMMENT,
      liked: constants.LIKED,
    }[loc.pathname.split('/')[2]] || 0;

  return (
    <>
      <StyledMypage>
        <main>
          {articleType ? (
            <MyArticleBoard articleType={articleType} />
          ) : (
            <>
              <MyProfile />
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
