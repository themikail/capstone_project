import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function ListenMusic() {
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

  return (
    <>
      {/* Click to play/stop music */}
      <Button>
        <RoundImage
          src="/assets/images/musicImage/hotlineBling.jpg"
          onClick={toggleAudio}
          width={60}
          height={60}
          alt="music"
          isPlaying={isPlaying}
        />
      </Button>
      <audio ref={audioRef}>
        <source src="/assets/music/HotlineBling.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
}

const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;

const RoundImage = styled(Image)`
  border-radius: 50%;
  opacity: ${({ isPlaying }) => (isPlaying ? "1" : "0.5")};
`;
