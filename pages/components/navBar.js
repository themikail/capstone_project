import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Modal from "./functions/modal";
import PostFeed from "./postFeed";
import Link from "next/link";

export default function Navbar({ posts, setPosts, imageCover, music }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <NavbarContainer>
      {/* <Button>
        <Image
          src={"/assets/images/icons/navbar/home.png"}
          width={30}
          height={30}
          alt="home"
        />
      </Button> */}
      <Button onClick={openModal}>
        <Image
          src={"/assets/images/icons/navbar/post.png"}
          width={30}
          height={30}
          alt="home"
        />
      </Button>
      <Modal isOpen={modalIsOpen} closeModal={closeModal}>
        <PostFeed
          posts={posts}
          setPosts={setPosts}
          music={music}
          imageCover={imageCover}
          closeModal={closeModal}
        />
      </Modal>
      <Button>
        <Link href="../components/profile">
          <Image
            src={"/assets/images/icons/navbar/profile.png"}
            width={30}
            height={30}
            alt="home"
          />
        </Link>
      </Button>
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

const Button = styled.button`
  background: transparent;
  border: none;
`;
