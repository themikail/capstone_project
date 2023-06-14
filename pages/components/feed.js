import React, { useState } from "react";
import Cards from "./cards";
import Navbar from "./navBar";
import styled from "styled-components";
import ActiveMusic from "./activeMusic";

const dummyMusic = [
  {
    id: 1,
    Music: "/assets/music/panda.mp3",
    Title: "Panda",
    Photo: "/assets/images/musicImage/panda.jpeg",
  },

  {
    id: 2,
    Music: "/assets/music/belki.mp3",
    Title: "Belki",
    Photo: "/assets/images/musicImage/bellki.jpeg",
  },

  {
    id: 3,
    Music: "/assets/music/bukizbenimkaderim.mp3",
    Title: "BUK",
    Photo: "/assets/images/musicImage/bukizbenimkaderim.jpeg",
  },
];

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
  const [activeMusic, setActiveMusic] = useState(dummyMusic);

  return (
    <FeedSection>
      <ActiveMusic activeMusic={activeMusic} setActiveMusic={setActiveMusic} />
      <Cards posts={posts} setPosts={setPosts} />
      <Navbar posts={posts} setPosts={setPosts} />
    </FeedSection>
  );
}

const FeedSection = styled.div`
  background-color: #fff;
`;
