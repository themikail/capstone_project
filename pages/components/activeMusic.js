import React, { useState, useRef } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function ActiveMusic() {
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);
  const audioRef1 = useRef();
  const audioRef2 = useRef();
  const audioRef3 = useRef();

  const toggleAudio1 = () => {
    const audioElement = audioRef1.current;

    if (isPlaying1) {
      audioElement.pause();
    } else {
      audioElement.play();
    }

    setIsPlaying1(!isPlaying1);
  };

  const toggleAudio2 = () => {
    const audioElement = audioRef2.current;

    if (isPlaying2) {
      audioElement.pause();
    } else {
      audioElement.play();
    }

    setIsPlaying2(!isPlaying2);
  };

  const toggleAudio3 = () => {
    const audioElement = audioRef3.current;

    if (isPlaying3) {
      audioElement.pause();
    } else {
      audioElement.play();
    }

    setIsPlaying3(!isPlaying3);
  };

  return (
    <Container>
      <Button>
        <RoundImage
          src="/assets/images/musicImage/panda.jpeg"
          onClick={toggleAudio1}
          width={60}
          height={60}
          alt="music"
          isPlaying={isPlaying1}
        />
      </Button>
      <audio ref={audioRef1}>
        <source src="/assets/music/panda.mp3" type="audio/mpeg" />
      </audio>

      <Button>
        <RoundImage
          src="/assets/images/musicImage/bukizbenimkaderim.jpeg"
          onClick={toggleAudio2}
          width={60}
          height={60}
          alt="music"
          isPlaying={isPlaying2}
        />
      </Button>
      <audio ref={audioRef2}>
        <source src="/assets/music/bukizbenimkaderim.mp3" type="audio/mpeg" />
      </audio>

      <Button>
        <RoundImage
          src="/assets/images/musicImage/bellki.jpeg"
          onClick={toggleAudio3}
          width={60}
          height={60}
          alt="music"
          isPlaying={isPlaying3}
        />
      </Button>
      <audio ref={audioRef3}>
        <source src="/assets/music/belki.mp3" type="audio/mpeg" />
      </audio>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;

const RoundImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  opacity: ${({ isPlaying }) => (isPlaying ? "1" : "0.5")};
`;

export const musicName = "Panda";
export const musicCover = "/assets/images/musicImage/panda.jpeg";
