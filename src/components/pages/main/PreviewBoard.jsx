import React from 'react';

const PreviewBoard = ({ categoryName }) => {
  return (
    <>
      <div>
        <header>
          <div>따봉</div>
          <div>{categoryName}</div>
          <div>더보기 {'>'}</div>
        </header>
        <div>
          <div>map 돌려서 렌더링</div>
        </div>
      </div>
    </>
  );
};

export default PreviewBoard;
