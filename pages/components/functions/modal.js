import React from "react";
import styled from "styled-components";

export default function Modal({ isOpen, closeModal, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <ModalContainer>
        <ModalContent>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
          {children}
        </ModalContent>
      </ModalContainer>
    </>
  );
}

const ModalContainer = styled.div``;

const ModalContent = styled.div``;

const CloseButton = styled.div``;
