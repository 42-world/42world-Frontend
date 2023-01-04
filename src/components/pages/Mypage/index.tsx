/** @jsxImportSource @emotion/react */

import { MyArticleBoard, MypageBoard } from '@components/pages/Mypage/components';

import { useMypage } from '@components/pages/Mypage/hooks';
import QuickLink from '@common/QuickLink/QuickLink';

import { asideWrapper, mainWrapper, mypageWrapper } from '@components/pages/Mypage/styles/Mypage.styles';

const Mypage = () => {
  const { articleType } = useMypage();

  return (
    <div css={mypageWrapper}>
      <main css={mainWrapper}>{articleType ? <MyArticleBoard articleType={articleType} /> : <MypageBoard />}</main>
      <aside css={asideWrapper}>
        <QuickLink />
      </aside>
    </div>
  );
};

export default Mypage;
