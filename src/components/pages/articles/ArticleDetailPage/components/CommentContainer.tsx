import { useState } from 'react';

import { useGetComments } from '@root/common/hooks/api/comment';
import PageSelector from '@root/common/PageSelector';
import { CommentService, ReactionService } from '@root/network';
import { getCreatedAt } from '../../common/utils';
import CommentItem from './CommentItem';
import { Comment } from '@root/network/types/Comment';

interface CommentContainerProps {
  articleId: number;
}

const CommentContainer = ({ articleId }: CommentContainerProps) => {
  const [page, setPage] = useState(1);
  const [inputText, setInputText] = useState('');

  const { isError, comments, meta, refetch } = useGetComments(articleId, page);
  const onChangePage = (page: number) => {
    setPage(page);
  };

  const handleChangeInput = (e: any) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async () => {
    // 댓글 작성
    if (inputText.length < 1) return;

    try {
      await CommentService.createComment({
        content: inputText,
        articleId,
      });

      setInputText('');
      setPage(1);
      refetch();
    } catch (e) {
      window.alert('댓글 작성 실패');
    }
  };

  const handleUpdate = async (commentId: number) => {
    // 댓글 수정
  };

  const handleDelete = async (commentId: number) => {
    if (!window.confirm('삭제하시겠습니까?')) return;

    try {
      await CommentService.deleteComment(commentId);

      refetch();
    } catch (e) {
      window.alert('댓글 삭제 실패');
    }
  };

  return (
    <>
      <div>댓글 {meta?.totalCount}개</div>
      <div>
        <textarea placeholder="댓글을 입력하세요" value={inputText} onChange={handleChangeInput} />
        <input onClick={handleSubmit} type="submit" value="입력" />
      </div>
      <div>
        댓글 페이지네이션
        {comments &&
          comments.map(comment => (
            <CommentItem
              comment={comment}
              articleId={articleId}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          ))}
        {meta && <PageSelector currentPage={page} onChangePage={onChangePage} totalPageCount={meta.pageCount} />}
      </div>
    </>
  );
};

export default CommentContainer;
