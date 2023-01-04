/** @jsxImportSource @emotion/react */

import { useMyArticlePreview } from '@components/pages/Mypage/hooks';
import { ARTICLE_TYPE } from '@components/pages/Mypage/utils';
import ArticlePreview from '@components/pages/Mypage/components/MypageBoard/ArticlePreview';
import { Article } from '@root/network/types/Article';

import {
  myArticlePreviewTitleWrapper,
  myArticlePreviewWrapper,
} from '@components/pages/Mypage/styles/MyArticlePreview.styles';

interface Props {
  title: string;
  type: number;
  articleListArray: Article[];
  hrefLink: string;
}

const MyArticlePreview = ({ title, type, articleListArray, hrefLink }: Props) => {
  const { handleClickMoreButton } = useMyArticlePreview(hrefLink);

  return (
    <div css={myArticlePreviewWrapper(type)}>
      <div css={myArticlePreviewTitleWrapper}>
        <h2>{title}</h2>
        <button type="button" onClick={handleClickMoreButton}>
          {'더 보기 >'}
        </button>
      </div>
      {articleListArray.map(article => (
        <ArticlePreview
          key={`${type}-${article.id}`}
          id={type === ARTICLE_TYPE.COMMENT ? article.id : article.id}
          title={type === ARTICLE_TYPE.COMMENT ? article.content : article.title}
          likeCount={type !== ARTICLE_TYPE.COMMENT ? article.likeCount : -1}
          commentCount={type !== ARTICLE_TYPE.COMMENT ? article.commentCount : -1}
        />
      ))}
    </div>
  );
};

export default MyArticlePreview;
