import PreviewBoard from './PreviewBoard';

const Main = () => {
  return (
    <>
      <div>
        <div>
          <div>검색</div>
          <div>
            <PreviewBoard categoryName={'공지'} />
            <PreviewBoard categoryName={'인기글'} />
            <PreviewBoard categoryName={'자유게시판'} />
            <PreviewBoard categoryName={'익명게시판'} />
          </div>
        </div>
        <div>우측</div>
      </div>
      <div>footer</div>
    </>
  );
};

export default Main;
