import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { getCompanyListFamous } from "../../../apis/company";

function RealtimeFamousCompany() {
  const [companyList, setCompanyList] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getCompanyListFamous();
      setCompanyList(data);
    })();
  }, []);
  return (
    <RealtimeWrapper>
      <div className="head">실시간 인기 회사</div>
      <ol>
        {companyList.map((v, i) => (
          <li key={v._id}>
            <em>{i + 1}</em>
            {v.name}
          </li>
        ))}
      </ol>
      <p>
        <AiOutlineInfoCircle size="14" />
        <span>알럼에서 실시간으로 많이 검색된 회사 순위</span>
      </p>
    </RealtimeWrapper>
  );
}

const RealtimeWrapper = styled.aside`
  width: 300px;
  margin-left: 64px;
  margin-top: 40px;
  padding: 22px 21px 14px;
  background: #f8f8f8;
  height: fit-content;
  .head {
    font-weight: 700;
    font-size: 18px;
    padding: 0 0 8px 10px;
  }
  ol {
    padding: 0;
    margin: 0;
    li {
      padding: 5px 3px;
      line-height: 17px;
      vertical-align: middle;
      list-style: none;
      em {
        display: inline-block;
        width: 20px;
        margin-right: 10px;
        font-weight: 700;
        color: #94969b;
        text-align: center;
        line-height: 20px;
        vertical-align: middle;
      }
    }
  }
  p {
    margin-top: 4px;
    padding: 9px 0 8px;
    color: #94969b;
    font-size: 12px;
    letter-spacing: -0.5px;
    text-align: center;
    & > span {
      margin-left: 5px;
    }
  }
`;

export default RealtimeFamousCompany;
