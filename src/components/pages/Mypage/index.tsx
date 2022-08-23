import { MyArticleBoard, MypageBoard } from '@components/pages/Mypage/components';

import { useMypage } from '@components/pages/Mypage/hooks';
import QuickLink from '@common/QuickLink/QuickLink';

import { StyledMypage } from '@components/pages/Mypage/styles';

const Mypage = () => {
  const { articleType } = useMypage();

  return (
    <StyledMypage>
      <main>{articleType ? <MyArticleBoard articleType={articleType} /> : <MypageBoard />}</main>
      <aside>
        <QuickLink />
      </aside>
    </StyledMypage>
  );
};

export default Mypage;
