import React from "react";
import styled from "styled-components";
import { Link } from "../../../../node_modules/react-router-dom/index";

const Breadcrumb = ({ slug, title }) => {
  return (
    <BreadcrumbBlock>
      <Link to={`/topics/${slug}`}>
        토픽 {`>`} {title}
      </Link>
    </BreadcrumbBlock>
  );
};

const BreadcrumbBlock = styled.section`
  padding: 40px 0 20px;
  & > a {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    color: #222;
  }
`;

export default Breadcrumb;
