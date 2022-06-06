import styled from 'styled-components';
import CommentCount from './CommentCount';
import LikeCount from './LikeCount';
import StyledLink from './StyledLink';

const PreviewItems = ({ articles }) => {
  return (
    <div>
      {articles &&
        articles.map(article => (
          <StyledLink to={`/article/${article.id}`}>
            <StyledPreviewItemContainer>
              <div>{article.title}</div>
              <StyledPreviewItemContainer>
                <LikeCount count={article.likeCount} />
                <CommentCount count={article.commentCount} />
              </StyledPreviewItemContainer>
            </StyledPreviewItemContainer>
          </StyledLink>
        ))}
    </div>
  );
};

const StyledPreviewItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  color: black;
`;

const StyledPreviewItemContent = styled.div`
  text-decoration-line: none;
`;

export default PreviewItems;
