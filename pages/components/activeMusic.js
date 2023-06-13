import React, { useState, useRef } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function ActiveMusic({ activeMusic, setActiveMusic }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const toggleAudio = () => {
    const audioElement = audioRef.current;

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleSetActiveMusic = (music) => {
    setActiveMusic(music);
    setIsPlaying(false);
  };

  return (
    <Container>
      {activeMusic.map((music) => (
        <Button key={music.id} onClick={() => handleSetActiveMusic(music)}>
          <RoundImage
            src={music.Photo}
            width={60}
            height={60}
            alt="music"
            isPlaying={isPlaying && music === activeMusic}
          />
          {isPlaying && music === activeMusic && (
            <audio ref={audioRef} autoPlay>
              <source src={music.Music} type="audio/mpeg" />
            </audio>
          )}
        </Button>
      ))}
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
