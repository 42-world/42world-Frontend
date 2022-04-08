import { useEffect, useState } from "react";
import styled from "styled-components";
import { CategoryService } from "../../network";
import { rem } from "../../styles/rem";
import { Container } from "../atoms/global";
import { CategoryPreview, PhotoCategoryPreview } from "../organisms/main";
import { Searchbar } from "../organisms/main";
import { QuickLink } from "../organisms/main";
import { ClusterStatus } from "../organisms/main";

const Main = () => {
  const [categories, setCategories] = useState(null);
  const fetch = async () => {
    const response = await CategoryService.getCategories();
    setCategories(response.data);
  };

  useEffect(() => {
    fetch();
    // eslint-disable-next-line
  }, []);
  if (!categories) return <></>;
  return (
    <MainContainer>
      <main>
        <Searchbar />
        <div className="category-preview-container">
          {categories.map((category) => (
            <CategoryPreview key={category.id} category={category} />
          ))}
        </div>
        <div>
          <PhotoCategoryPreview />
        </div>
      </main>
      <aside>
        <ClusterStatus />
        <QuickLink />
      </aside>
    </MainContainer>
  );
};

const MainContainer = styled(Container)`
  justify-content: center;

  main,
  aside {
    margin-top: ${rem(40)};
  }

  main {
    max-width: ${rem(768)};

    .category-preview-container {
      display: flex;
      flex-wrap: wrap;

      margin-top: ${rem(20)};
      max-width: ${rem(768)};
    }
  }

  aside {
    width: ${rem(240)};
    padding-left: ${rem(20)};

    @media screen and (max-width: 1100px) {
      display: none;
    }
  }
`;

export default Main;
