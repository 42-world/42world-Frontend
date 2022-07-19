import { User } from '@network/types/User';

interface ArticleDetailWriterProps {
  writer: User;
}

const ArticleDetailWriter = ({ writer }: ArticleDetailWriterProps) => {
  return (
    <h3>
      {writer.role} · {writer.nickname}
    </h3>
  );
};

export default ArticleDetailWriter;
