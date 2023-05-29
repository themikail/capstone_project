import React from "react";
import styled from "styled-components";

export default function NavbarButton({ icon }) {
  const Icon = icon;

  return (
    <Button>
      <Icon />
    </Button>
  );
}

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
