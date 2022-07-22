import PageSelector from '@root/common/PageSelector';
import { CommentService } from '@root/network';
import { Comment } from '@root/network/types/Comment';
import { Meta } from '@root/network/types/Pagination';
import CommentItem from './CommentItem';

interface CommentsListProps {
  isReactionable: boolean;
  comments?: Comment[];
  page: number;
  meta?: Meta;
  setPage: (page: number) => void;
  refetch: () => void;
}

const CommentsList = ({ isReactionable, comments, meta, page, setPage, refetch }: CommentsListProps) => {
  const handleDelete = async (commentId: number) => {
    if (!window.confirm('삭제하시겠습니까?')) return;

    try {
      await CommentService.deleteComment(commentId);

      refetch();
    } catch (e) {
      window.alert('댓글 삭제 실패');
    }
  };

  const onChangePage = (page: number) => {
    setPage(page);
  };

  return (
    <div>
      {comments &&
        comments.map(comment => (
          <CommentItem
            isReactionable={isReactionable}
            comment={comment}
            articleId={comment.articleId}
            handleDelete={handleDelete}
          />
        ))}
      {meta && <PageSelector currentPage={page} onChangePage={onChangePage} totalPageCount={meta.pageCount} />}
    </div>
  );
};

export default CommentsList;
