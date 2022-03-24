import styled from "styled-components";
import { SITEMAP } from "../../../styles/const";

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
  margin-top: 2rem;
  border-radius: 1rem;

  .title {
    width: 80%;
    font-size: 1.6rem;
    text-align: center;
    padding: 1rem;

    border-bottom: 1px solid black;
  }

  .link {
    width: 24rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & > img {
      border-radius: 1rem;
      margin: 1rem;
      width: 6rem;
      height: 6rem;
      background: white;
    }

    span {
      font-size: 1rem;
    }
  }
`;

export default QuickLink;
