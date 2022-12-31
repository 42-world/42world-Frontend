/** @jsxImportSource @emotion/react */

import { useMyArticleBoard } from '@components/pages/Mypage/hooks';
import { myArticleBoardTitle, myArticleBoardWrapper } from '@components/pages/Mypage/styles/MyArticleBoard.styles';

interface Props {
  articleType: number;
}

const MyArticleBoard = ({ articleType }: Props) => {
  const { articleInfo, handleClickGoBack, innerComponent } = useMyArticleBoard(articleType);

  return (
    <div css={myArticleBoardWrapper}>
      <div css={myArticleBoardTitle}>
        <h1>{articleInfo.title}</h1>
        <button onClick={handleClickGoBack}>{'< 돌아가기'}</button>
      </div>
      {innerComponent}
    </div>
  );
};

export default MyArticleBoard;
