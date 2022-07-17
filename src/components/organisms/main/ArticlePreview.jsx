import { AiOutlineHeart } from 'react-icons/ai';
import { BiCommentDots } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { rem } from '../../../styles/rem';

const ArticlePreview = ({ id, title, likeCount, commentCount }) => {
  const navigate = useNavigate();

  const handleClickArticle = () => {
    navigate(`/article/${id}`);
  };

  return (
    <ArticlePreviewWrapper onClick={handleClickArticle}>
      <h3>{title}</h3>
      <ReactionWrapper>
        <span className="like">
          <AiOutlineHeart />
          <span>{likeCount}</span>
        </span>
        <span className="comment">
          <BiCommentDots />
          <span>{commentCount}</span>
        </span>
      </ReactionWrapper>
    </ArticlePreviewWrapper>
  );
};

const ArticlePreviewWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  font-size: ${rem(12)};
  padding: ${rem(5)} ${rem(10)};
  border-bottom: ${rem(1)} solid ${props => props.theme.lineGray1};

  h3 {
    font-weight: normal;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const ReactionWrapper = styled.div`
  display: flex;
  width: max-content;
  white-space: nowrap;

  & > span {
    display: flex;
    align-items: center;
    padding: ${rem(4)};
  }

  .like {
    color: ${props => props.theme.buttonRed1};
  }

  .comment {
    color: ${props => props.theme.buttonBlue2};
  }
`;

export default ArticlePreview;
