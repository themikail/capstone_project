import React, { useState } from "react";
import Cards from "./cards";
import Navbar from "./navBar";
import styled from "styled-components";
import ActiveMusic from "./activeMusic";

const dummyPosts = [
  {
    id: 1,
    content: "Dies ist der Inhalt des ersten Beitrags.",
    Photo: "/assets/images/1.jpg",
    comments: [],
  },
  {
    id: 2,
    content: "Dies ist der Inhalt des zweiten Beitrags2.",
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

export default function Feed() {
  const [posts, setPosts] = useState(dummyPosts);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const toggleAudio = () => {
    const audioElement = audioRef.current;

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }

    setIsPlaying(!isPlaying);
  };

  const music = "/assets/music/belki.mp3";
  const imageCover = "/assets/images/musicImage/bellki.jpeg";

  return (
    <FeedSection>
      <ActiveMusic
        audioRef={audioRef}
        isPlaying={isPlaying}
        toggleAudio={toggleAudio}
        music={music}
        imageCover={imageCover}
      />
      <Cards posts={posts} setPosts={setPosts} />
      <Navbar posts={posts} setPosts={setPosts} />
    </FeedSection>
  );
}

const FeedSection = styled.div`
  background-color: #fff;
`;
