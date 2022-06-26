import { useState } from 'react';
import styled from 'styled-components';

import QuickLink from 'common/QuickLink/QuickLink';

const QuickLinkModal = ({ open }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <Container>
          <QuickLink />
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

const Container = styled.div`
  position: absoulte;
`;

export default QuickLinkModal;
