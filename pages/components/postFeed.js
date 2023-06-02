import React, { useState } from "react";
import styled from "styled-components";

export default function PostFeed({ posts, setPosts, music, imageCover }) {
  const handlePostSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newPost = {
      id: posts.length + 1,
      content: data.inputComment,
      Photo: imageCover,
      comments: [],
    };

    setPosts([newPost, ...posts]);
  };

  return (
    <>
      <h2>Post lovely Music </h2>
      <FreeText>
        <p>You are listening: </p>
      </FreeText>
      <form onSubmit={handlePostSubmit}>
        <SongInfo>
          <SongCover
            src="/assets/images/musicImage/bellki.jpeg"
            width={60}
            height={60}
            alt="music"
          />
          <SongDetails>
            <SongName>{music}</SongName>
          </SongDetails>
        </SongInfo>
        <CommentForm>
          <input
            name="inputComment"
            id="inputComment"
            placeholder="Enter your comment"
          />
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
