import { AiOutlineLogin } from "react-icons/ai";
// import { Button } from "bootstrap";
import { FaGem, FaHeart } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  //SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

const SideNavigation = ({ handleClick }) => {
  // const [collapsed, setCollapsed] = useState(false);

  // added styles
  const styles = {
    sideBarHeight: {
      height: "50vh",
      width: "100vw",
    },
    menuIcon: {
      float: "right",
      margin: "10px",
    },
  };
  // const onClickMenuIcon = () => {
  //   //handleClick();
  //   setCollapsed(!collapsed);
  // };
  return (
    <ProSidebar style={styles.sideBarHeight}>
      {/*collapsed={collapsed} */}
      {/* <SidebarHeader>
        <div style={styles.menuIcon} onClick={onClickMenuIcon}>
          <AiOutlineMenu />
        </div>
      </SidebarHeader> */}
      <Menu iconShape="square">
        <SubMenu title="커뮤니티" icon={<FaHeart />}>
          <div onClick={handleClick}>
            <MenuItem>
              자유게시판1
              <Link to="/category/1" />
            </MenuItem>
          </div>
          <div onClick={handleClick}>
            <MenuItem>
              자유게시판2
              <Link to="/category/2" />
            </MenuItem>
          </div>
          <div onClick={handleClick}>
            <MenuItem>
              42born2code 공지
              <Link to="/category/1" />
            </MenuItem>
          </div>
        </SubMenu>
        {/* <SubMenu title="커리어" icon={<FaHeart />}>
          <div onClick={handleClick}>
            <MenuItem>고시</MenuItem>
          </div>
          <div onClick={handleClick}>
            <MenuItem>IT회사</MenuItem>
          </div>
        </SubMenu>
        <SubMenu title="일상생활" icon={<FaHeart />}>
          <div onClick={handleClick}>
            <MenuItem>중고거래</MenuItem>
          </div>
        </SubMenu>
        <SubMenu title="프로젝트" icon={<FaHeart />}>
          <div onClick={handleClick}>
            <MenuItem>42DoProject</MenuItem>
          </div>
        </SubMenu> */}
        <div onClick={handleClick}>
          <MenuItem icon={<FaGem />}>전체글</MenuItem>
        </div>

        <div onClick={handleClick}>
          <MenuItem icon={<FaGem />}>인기글</MenuItem>
        </div>

        <div onClick={handleClick}>
          <MenuItem icon={<AiOutlineLogin />}>
            로그인
            <Link to="/login" />
          </MenuItem>
        </div>
      </Menu>
    </ProSidebar>
  );
};

export default SideNavigation;
