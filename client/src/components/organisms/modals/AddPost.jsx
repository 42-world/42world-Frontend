import React, { useRef, useState } from "react";
import styled from "styled-components";
import { ModalContainer, Backdrop } from "../../atoms/modal";
import { IconPost } from "../../../assets/images/icons/index";
import { uploadImage } from "../../../apis/upload";
import { addPost } from "../../../apis/board";

const ModalAddPost = ({ onClose }) => {
  const fileEl = useRef(null);
  const [imageList, setImageList] = useState([]);
  const [content, setContent] = useState("");

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const newImage = {
        preview: reader.result,
        file,
      };
      setImageList((prev) => [...prev, newImage]);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    // 1.이미지들을 업로드해서 s3 주소를 받아온다.
    // 2. s3 주소랑 content를 서버에 보내서 새로운 post 작성
    // const { file } = uploadImage({ file: imageList[0].file });
    //const promiseList = [uploadImage({ file: imageList[0].file })];
    const promiseList = imageList.map(({ file }) => uploadImage({ file }));
    const urlList = await Promise.all(promiseList);
    //addPost({ content, imageList: urlList });
  };

  return (
    <>
      <Backdrop onClick={onClose} />
      <Container>
        <Header>새 게시물 만들기</Header>
        <Main>
          {imageList.map(({ preview }) => (
            <ImgPreview src={preview} key={preview} />
          ))}
          <IconPost />
          <Guide>사진과 동영상을 여기에 끌어다 놓으세요</Guide>
          <BtnFile
            onClick={() => {
              fileEl.current.click();
            }}
          >
            컴퓨터에서 선택
          </BtnFile>
          <InputFile
            onChange={handleFileChange}
            type="file"
            ref={fileEl}
            accept="image/*"
          />
          <TextArea
            rows="6"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></TextArea>
          <BtnSubmit onClick={handleSubmit}>업로드</BtnSubmit>
        </Main>
      </Container>
    </>
  );
};

const Container = styled(ModalContainer)`
  max-width: 670px;
  width: 70%;
`;
const Header = styled.header`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 43px;
  border-bottom: 1px solid #dbdbdb;
  color: #262626;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;
const Main = styled.main`
  height: 670px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: auto;
`;
const Guide = styled.h4`
  font-weight: lighter;
  font-size: 22px;
`;
const BtnFile = styled.button`
  padding: 5px 9px;
  color: #fff;
  background-color: #0095f6;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
`;
const InputFile = styled.input`
  display: none;
`;

const ImgPreview = styled.img`
  width: 100%;
`;

const TextArea = styled.textarea`
  margin: 20px auto;
  width: 80%;

  resize: none;
  border: 1px solid;
`;

const BtnSubmit = styled.button``;
export default ModalAddPost;
