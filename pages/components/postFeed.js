import React from "react";
import styled from "styled-components";
import { musicName, musicCover } from "./activeMusic";

export default function PostFeed() {
  return (
    <>
      <h2>Post lovely Music </h2>
      <SongInfo>
        <SongCover src={musicCover} width={60} height={60} alt="music" />
        <SongDetails>
          <SongName>{musicName}</SongName>
        </SongDetails>
      </SongInfo>
    </>
  );
}

const SongInfo = styled.div`
  display: flex;
  align-items: center;
`;

const SongCover = styled.img`
  border-radius: 50%;
  object-fit: cover;
`;

const SongDetails = styled.div`
  margin-left: 20px;
`;

const SongName = styled.h3`
  margin: 0;
`;
