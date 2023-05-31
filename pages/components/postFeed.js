import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function PostFeed({ songName, coverPhotoSrc }) {
  return (
    <>
      <h2>Modal Content</h2>
      <div></div>
    </>
  );
}

const SongInfo = styled.div`
  display: flex;
  align-items: center;
`;

const SongCover = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

const SongDetails = styled.div`
  margin-left: 20px;
`;

const SongName = styled.h3`
  margin: 0;
`;
