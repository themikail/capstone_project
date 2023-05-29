import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function Navbar() {
  return (
    <NavbarContainer>
      <Image
        src={"/assets/images/icons/navbar/home.png"}
        width={30}
        height={30}
        alt="home"
      />
      <Image
        src={"/assets/images/icons/navbar/post.png"}
        width={30}
        height={30}
        alt="home"
      />
      <Image
        src={"/assets/images/icons/navbar/profile.png"}
        width={30}
        height={30}
        alt="home"
      />
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
