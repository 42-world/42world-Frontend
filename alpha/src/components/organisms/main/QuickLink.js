import styled from "styled-components";
import { SITEMAP } from "../../../styles/const";
import { rem } from "../../../styles/rem";

function QuickLink() {
  return (
    <QuickLinkWrapper>
      <div className="title">Quick Link</div>
      <div className="links">
        {SITEMAP.map((SITE) => (
          <div className="link" key={SITE.name}>
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
  background: ${(props) => props.theme.backgroundGray1};
  margin-top: ${rem(20)};
  border-radius: ${rem(10)};

  h2 {
    font-size: ${rem(16)};
  }

  .title {
    width: 80%;
    font-size: ${rem(16)};
    text-align: center;
    padding: ${rem(10)};

    border-bottom: ${rem(1)} solid black;
  }

  .link {
    width: ${rem(240)};
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & > img {
      border-radius: ${rem(10)};
      margin: ${rem(10)};
      width: ${rem(60)};
      height: ${rem(60)};
      background: white;
    }

    span {
      font-size: ${rem(10)};
    }
  }
`;

export default QuickLink;
