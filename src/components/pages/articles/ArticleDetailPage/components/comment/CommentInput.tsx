import { useState } from 'react';

import { CommentService } from '@root/network';

interface CommentInputProps {
  articleId: number;
  setPage: (page: number) => void;
  refetch: () => void;
}

const CommentInput = ({ articleId, setPage, refetch }: CommentInputProps) => {
  const [inputText, setInputText] = useState('');

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
  return (
    <div>
      <textarea placeholder="댓글을 입력하세요" value={inputText} onChange={handleChangeInput} />
      <input onClick={handleSubmit} type="submit" value="입력" />
    </div>
  );
};

export default CommentInput;
