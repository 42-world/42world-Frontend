import { NumberProps } from '@components/pages/articles/common/types';

const CommentCount = ({ totalCount }: NumberProps) => {
  return <div>댓글 {totalCount}개</div>;
};

export default CommentCount;
