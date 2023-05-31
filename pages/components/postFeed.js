import React, { useState } from "react";
import styled from "styled-components";
import { musicName, musicCover } from "./activeMusic";

export default function PostFeed() {
  return (
    <>
      <h2>Post lovely Music </h2>
      <FreeText>
        <p>You are listening: </p>
      </FreeText>
      <form>
        <SongInfo>
          <SongCover src={musicCover} width={60} height={60} alt="music" />
          <SongDetails>
            <SongName>{musicName}</SongName>
          </SongDetails>
        </SongInfo>
        <CommentForm>
          <input placeholder="Enter your comment" />
        </CommentForm>
        <PostButton type="submit">Post</PostButton>
      </form>
      <FreeText>
        <p>Another Songs: </p>
      </FreeText>

      <PostButton>Post</PostButton>
    </>
  );
}

const FreeText = styled.div`
  font-weight: 500;
`;

const PostButton = styled.button`
  margin-top: 15px;
`;

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

const CommentForm = styled.div`
  margin-top: 10px;
`;
