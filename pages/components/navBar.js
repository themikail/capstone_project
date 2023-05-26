import React from "react";
import styled from "styled-components";
import {
  RiNewspaperLine,
  RiChatSmile2Line,
  RiUserLine,
  RiAddCircleLine,
  RiDiscLine,
} from "react-icons/ri";
import NavbarButton from "./style/navBarButton";

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarButton icon={RiDiscLine} />
      <NavbarButton icon={RiAddCircleLine} />
      <NavbarButton icon={RiUserLine} />
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  z-index: 999;
`;
