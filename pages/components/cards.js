import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function Cards({ posts, setPosts }) {
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
      if (post.id === postId && post.comment && post.comment.trim() !== "") {
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
        const updatedLikes = post.likeStatus ? post.likes - 1 : post.likes + 1;
        return {
          ...post,
          likeStatus: !post.likeStatus,
          likes: updatedLikes,
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

  // Edit comment
  const handleEditComment = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          isEditing: true,
          editedContent: post.content,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  // Save edited comment
  const handleSaveComment = (event, postId) => {
    event.preventDefault();
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          isEditing: false,
          content: post.editedContent,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  // Delete post
  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  const calculateLikeCount = (post) => {
    if (post && post.likes) {
      return post.likes;
    }
    return 0;
  };

  const calculateCommentCount = (post) => {
    if (post && post.comments) {
      return post.comments.length;
    }
    return 0;
  };

  return (
    <Card>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <DropdownContainer>
              <DropdownButton>
                <Image
                  src="/assets/images/icons/dots.png"
                  width={20}
                  height={20}
                  alt="dots"
                />
              </DropdownButton>
              <DropdownContent>
                <DropdownButton onClick={() => handleEditComment(post.id)}>
                  <Image
                    src="/assets/images/icons/edit.png"
                    width={20}
                    height={20}
                    alt="editPost"
                  />
                </DropdownButton>
                <DropdownButton onClick={() => handleDeletePost(post.id)}>
                  <Image
                    src="/assets/images/icons/trash.png"
                    width={20}
                    height={20}
                    alt="trashPost"
                  />
                </DropdownButton>
              </DropdownContent>
            </DropdownContainer>
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
            <CountContainer>
              <CountTextContainer>
                <CommentCount isZero={calculateCommentCount(post) === 0}>
                  {calculateCommentCount(post)}
                </CommentCount>
              </CountTextContainer>
              <LikeCount isZero={calculateLikeCount(post) === 0}>
                {calculateLikeCount(post)}
              </LikeCount>
            </CountContainer>
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
            <CommentText>
              {post.isCommentVisible && (
                <form onSubmit={(event) => handleCommentSubmit(event, post.id)}>
                  <textarea
                    placeholder="Enter your comment"
                    value={post.comment}
                    onChange={(event) => handleCommentUpdate(event, post.id)}
                  />
                  <button type="submit">Posten</button>
                </form>
              )}
              <EditContent>
                {post.isEditing && (
                  <form onSubmit={(event) => handleSaveComment(event, post.id)}>
                    <textarea
                      placeholder="Edit your comment"
                      value={post.editedContent}
                      onChange={(event) =>
                        setPosts(
                          posts.map((p) =>
                            p.id === post.id
                              ? { ...p, editedContent: event.target.value }
                              : p
                          )
                        )
                      }
                    />
                    <button type="submit">Save</button>
                  </form>
                )}
              </EditContent>
            </CommentText>
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
  margin-bottom: 70px;
  list-style-type: none;
`;

const CountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const CountTextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CommentCount = styled.p`
  margin-right: 20px;
  margin-left: 68px;
  font-size: 10px;
  opacity: ${(props) => (props.isZero ? "0.2" : "1")};
`;

const LikeCount = styled.p`
  margin-left: auto;
  margin-right: 68px;
  font-size: 10px;
  opacity: ${(props) => (props.isZero ? "0.2" : "1")};
`;

const EditContent = styled.p``;

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
  padding: 0px 0px 0px 5px;
`;

const LikeIconImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  min-width: 80px;
  z-index: 1;
  right: 0;
`;

const DropdownButton = styled.button`
  background-color: #fff;
  border-width: 0px;
  padding: 12px 16px;
  display: block;
  cursor: pointer;
  width: 70%;
  margin-left: 35px;
`;
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropdownContent} {
    display: block;
  }
`;
