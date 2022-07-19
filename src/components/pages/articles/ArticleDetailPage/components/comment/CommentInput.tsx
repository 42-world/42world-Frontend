/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { css } from '@emotion/react';

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
    <div css={styledPostComment}>
      <textarea css={styledTextArea} placeholder="댓글을 입력하세요" value={inputText} onChange={handleChangeInput} />
      <input css={styledButton} onClick={handleSubmit} type="submit" value="입력" />
    </div>
  );
};

const styledPostComment = css`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const styledTextArea = css`
  outline: none;
  border: 1px solid #ddd;
  min-height: 4rem;
  padding: 0.5rem;
  resize: none;
  font-size: 1rem;
  flex-grow: 1;
  border-radius: 0.3rem;
  margin-right: 0.7rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const styledButton = css`
  border: none;
  background-color: #53b7ba;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 1.4rem 2.5rem;
  border-radius: 0.3rem;
  cursor: pointer;
`;

export default CommentInput;
