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

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  position: relative;
  width: 400px;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
`;
