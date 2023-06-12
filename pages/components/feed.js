import React, { useState } from "react";
import dynamic from "next/dynamic";
import Cards from "./cards";
import Navbar from "./navBar";
import styled from "styled-components";

const ActiveMusic = dynamic(() => import("./activeMusic"), {
  ssr: false,
});

const dummyPosts = [
  {
    id: 1,
    content: "Dies ist der Inhalt des ersten Beitrags.",
    Photo: "/assets/images/1.jpg",
    comments: [],
    likes: 0,
  },
  {
    id: 2,
    content: "Dies ist der Inhalt des zweiten Beitrags2.",
    Photo: "/assets/images/2.jpg",
    comments: [],
    likes: 0,
  },
  {
    id: 3,
    content: "Dies ist der Inhalt des dritten Beitrags.",
    Photo: "/assets/images/3.jpg",
    comments: [],
    likes: 0,
  },
];

export default function Feed() {
  const [posts, setPosts] = useState(dummyPosts);

  return (
    <FeedSection>
      <ActiveMusic />
      <Cards posts={posts} setPosts={setPosts} />
      <Navbar posts={posts} setPosts={setPosts} />
    </FeedSection>
  );
}

const FeedSection = styled.div`
  background-color: #fff;
`;
