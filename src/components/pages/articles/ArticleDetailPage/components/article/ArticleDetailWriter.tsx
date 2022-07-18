import { User } from '@network/types/User';

interface ArticleDetailWriterProps {
  writer: User;
}

const ArticleDetailWriter = ({ writer }: ArticleDetailWriterProps) => {
  return (
    <>
      <div>{writer.role}</div>
      <div>{writer.nickname}</div>
    </>
  );
};

export default ArticleDetailWriter;
