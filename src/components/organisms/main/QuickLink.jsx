import styled from "styled-components";
import { SITEMAP } from "../../../styles/const";
import { rem } from "../../../styles/rem";

function QuickLink() {
  const handleClickLink = (url) => {
    window.open(url);
  };
  return (
    <QuickLinkWrapper>
      <div className="title">Quick Link</div>
      <div className="links">
        {SITEMAP.map((SITE) => (
          <div
            className="link"
            key={SITE.name}
            onClick={() => handleClickLink(SITE.link)}
          >
            <img src={SITE.icon} alt="" />
            <div>
              <h2>{SITE.name}</h2>
              <span>{SITE.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </QuickLinkWrapper>
  );
}

const QuickLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: inherit;
  // box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.backgroundGray1};

  border-radius: ${rem(10)};
  padding: 0.7rem;

  h2 {
    font-size: ${rem(16)};
  }

  .title {
    width: 100%;
    font-size: ${rem(16)};
    text-align: center;
    font-weight: bold;
    padding: ${rem(10)};

    border-bottom: 1.5px solid black;
  }

  .link {
    width: ${rem(240)};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: background 0.5s;
    cursor: pointer;

    & > img {
      border-radius: ${rem(10)};
      margin: ${rem(10)} ${rem(10)} ${rem(10)} ${rem(15)};
      width: ${rem(60)};
      height: ${rem(60)};
      background: white;
    }

    span {
      font-size: ${rem(10)};
    }

    &: hover {
      background: ${(props) => props.theme.backgroundBlue2};
    }
  }
`;

export default QuickLink;
