import styled from "styled-components";

const PostList = ({ data }) => {
  console.log(data);
  return (
    <List>
      {data.map(({ id, content, imageList, profile_image, user_name }) => (
        <Item key={id}>
          <Container>
            <Header>
              <ProfileImage
                src={
                  profile_image === null
                    ? "https://www.luminous-edu.com/wp-content/uploads/2020/06/blank-profile-picture-973460_640.png"
                    : profile_image
                }
              />
              <UserName>{user_name}</UserName>
            </Header>
            <Main>
              {imageList.map((image) => (
                <PostImage key={image} src={image} />
              ))}
            </Main>
          </Container>
          <Content>{content}</Content>
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul``;
const Item = styled.li``;
const Container = styled.article`
  background: #fff;
  border: 1px solid #dbdbdb;
  margin-bottom: 24px;
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 15px;
`;
const ProfileImage = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;
const UserName = styled.span`
  flex: 1px;
  margin-left: 12px;
  color: #262626;
`;
const Main = styled.main``;
const PostImage = styled.img`
  width: 100%;
`;
const Content = styled.p``;

export default PostList;
