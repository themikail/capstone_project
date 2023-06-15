import React, { useState } from "react";
import styled from "styled-components";
import ActiveMusic from "./activeMusic";

export default function PostFeed({ posts, setPosts, closeModal }) {
  const handlePostSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newPost = {
      id: posts.length + 1,
      content: data.inputComment,
      Photo: "../assets/images/musicImage/panda.jpeg",
      comments: [],
      likes: 0,
    };

    setPosts([newPost, ...posts]);

    closeModal();
  };

  return (
    <>
      <h2>Post lovely Music </h2>
      <FreeText>
        <p>
          You are listening:
          <br />
          <br />
          <strong>Panda</strong>
        </p>
      </FreeText>
      <form onSubmit={handlePostSubmit}>
        <SongInfo>
          <SongCover
            src="../assets/images/musicImage/panda.jpeg"
            width={60}
            height={60}
            alt="music"
          />
        </SongInfo>
        <CommentForm>
          <input
            name="inputComment"
            id="inputComment"
            placeholder="Enter your comment"
            autoComplete="off"
          />
        </CommentForm>
        <PostButton type="submit">Post</PostButton>
      </form>
    </>
  );
}

const FreeText = styled.div`
  font-weight: 500;
`;

const PostButton = styled.button`
  margin-top: 10px;
  border-radius: 16px;
  background-color: #008080;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const SongInfo = styled.div`
  display: flex;
  align-items: center;
`;

const SongCover = styled.img`
  border-radius: 50%;
  object-fit: cover;
`;

const CommentForm = styled.div`
  margin-top: 10px;
`;
