import React, { useState } from "react";
import styled from "styled-components";

const dummyPosts = [
  {
    id: 1,
    content: "Dies ist der Inhalt des ersten Beitrags 1.",
    Photo: "/assets/images/1.jpg",
    comments: [],
  },
  {
    id: 2,
    content: "Dies ist der Inhalt des zweiten Beitrags.",
    Photo: "/assets/images/2.jpg",
    comments: [],
  },
  {
    id: 3,
    content: "Dies ist der Inhalt des dritten Beitrags.",
    Photo: "/assets/images/3.jpg",
    comments: [],
  },
];

export default function Cards() {
  const [posts, setPosts] = useState(dummyPosts);

  // to update the comment
  const handleCommentUpdate = (event, postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comment: event.target.value,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  // comment Icon visible
  const handleCommentClick = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          isCommentVisible: !post.isCommentVisible,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  // comment function
  const handleCommentSubmit = (event, postId) => {
    event.preventDefault();
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const updatedComments = [...post.comments, post.comment];
        return { ...post, comments: updatedComments, comment: "" };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  // likestatus Icon toggle
  const handleLikeClick = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          likeStatus: !post.likeStatus,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  // create Click on Image
  const doubleClickHandler = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, likePhotos: true, likeStatus: true };
      }
      return post;
    });
    setPosts(updatedPosts);

    setTimeout(() => {
      const updatedPosts = posts.map((post) => {
        if (post.id === postId) {
          return { ...post, likePhotos: false, likeStatus: true };
        }
        return post;
      });
      setPosts(updatedPosts);
    }, 1000);
  };

  return (
    <Card>
      {posts.map((post) => (
        <div key={post.id}>
          <li>
            <PhotoContainer onClick={() => doubleClickHandler(post.id)}>
              <Photo
                src={post.Photo}
                width={100}
                height={100}
                alt={post.title}
              />
              {post.likePhotos && (
                <LikeIconImage src="/assets/images/icons/like_fill.png" />
              )}
            </PhotoContainer>
          </li>
          <p>{post.content}</p>
          <IconContainer>
            <Button>
              <PhotoIcon
                src="/assets/images/icons/comment.png"
                width={30}
                height={30}
                alt="comment"
                onClick={() => handleCommentClick(post.id)}
              />
            </Button>
            <Button>
              <PhotoIcon
                src={
                  post.likeStatus
                    ? "/assets/images/icons/like_fill.png"
                    : "/assets/images/icons/like.png"
                }
                width={30}
                height={30}
                alt="like"
                onClick={() => handleLikeClick(post.id)}
              />
            </Button>
          </IconContainer>
          {post.isCommentVisible && (
            <form onSubmit={(event) => handleCommentSubmit(event, post.id)}>
              <textarea
                placeholder="Enter your comment"
                value={post.comment}
                onChange={(event) => handleCommentUpdate(event, post.id)}
              />
              <button type="submit">Submit</button>
            </form>
          )}
          {post.comments.map((submittedComment, index) => (
            <li key={index}>
              <CommentText key={index}>{submittedComment}</CommentText>
            </li>
          ))}
          <hr />
        </div>
      ))}
    </Card>
  );
}

const Card = styled.div`
  padding: 10px;
  margin-bottom: 70px;
  list-style-type: none;
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100%;
  position: relative;
  overflow: hidden;
`;

const Button = styled.button`
  background: transparent;
  border: none;
`;

const Photo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 50px 0 50px;
`;

const PhotoIcon = styled.img``;

const CommentText = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;

const LikeIconImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
