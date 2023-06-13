import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function ActiveMusic({ activeMusic }) {
  const [currentSong, setCurrentSong] = useState(null);

  const toggleAudio = (song) => {
    if (currentSong === song) {
      // Wenn das aktuelle Lied bereits abgespielt wird, pausiere es
      setCurrentSong(null);
    } else {
      // Andernfalls spiele das angeklickte Lied ab
      setCurrentSong(song);
    }
  };

  return (
    <Container>
      {activeMusic.map((music) => (
        <Button key={music.id}>
          <RoundImage
            src={music.Photo}
            onClick={() => toggleAudio(music)}
            width={60}
            height={60}
            alt="music"
            isPlaying={currentSong === music}
          />
          {currentSong === music && (
            <audio autoPlay>
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
