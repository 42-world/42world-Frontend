import { useMyArticleBoard } from '@components/pages/Mypage/components/MyArticleBoard/hooks';

import { StyledMyArticleBoard } from '@components/pages/Mypage/styles';
import constants from '@components/pages/Mypage/constants';
import MyArticleList from './MyArticleList';
import MyCommentList from './MyCommentList';
import LikeArticleList from './LikeArticleList';

interface IProps {
  articleType: number;
}

const MyArticleBoard = ({ articleType }: IProps) => {
  const { articleInfo, handleClickGoBack } = useMyArticleBoard(articleType);

  const innerComponent = {
    [constants.ARTICLE]: <MyArticleList />,
    [constants.COMMENT]: <MyCommentList />,
    [constants.LIKED]: <LikeArticleList />,
  }[articleType];

  return (
    <StyledMyArticleBoard>
      <div className="title">
        <h1>{articleInfo.title}</h1>
        <button className="go-back" onClick={handleClickGoBack}>
          {'< 돌아가기'}
        </button>
      </div>
      {innerComponent}
    </StyledMyArticleBoard>
  );
};

export default MyArticleBoard;
