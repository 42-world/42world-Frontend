import styled from 'styled-components';

const Donation = () => {
  return (
    <DonationBlock>
      <DonationHeader>
        <h1>42월드는 42서울 출신 개발자 10여명이 만들어가고 있는 사이트입니다.</h1>
        <h1>QR을 찍어 후원해주시면 개발자들에게 큰 힘이 됩니다.</h1>
      </DonationHeader>
      <DonationBody>
        <img src="/assets/donation1.png" alt="기부1" />
        <img src="/assets/donation2.png" alt="기부2" />
        <img src="/assets/donation3.png" alt="기부3" />
      </DonationBody>
    </DonationBlock>
  );
};

export default Donation;

const DonationBlock = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eaeaea;
`;

const DonationHeader = styled.div`
  margin: 100px;
  font-size: 26px;
  font-weight: bold;
`;

const DonationBody = styled.div`
  img {
    margin: 10px;
    width: 400px;
    height: 400px;
  }
`;
