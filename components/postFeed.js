import React, { useState } from "react";
import styled from "styled-components";
import ActiveMusic from "./activeMusic";

export default function PostFeed({ posts, setPosts, closeModal, activeMusic }) {
  const handlePostSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newPost = {
      id: posts.length + 1,
      content: data.inputComment,
      Photo: musicCover,
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
        <p>You are listening:</p>
      </FreeText>
      <form onSubmit={handlePostSubmit}>
        <SongInfo>
          <SongCover src="" width={60} height={60} alt="music" />
        </SongInfo>
        <CommentForm>
          <textarea
            name="inputComment"
            id="inputComment"
            placeholder="Enter your comment"
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
