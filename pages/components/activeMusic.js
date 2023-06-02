import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function ActiveMusic({
  audioRef,
  isPlaying,
  toggleAudio,
  music,
  imageCover,
}) {
  // const [isPlaying, setIsPlaying] = useState(false);
  // const audioRef = React.createRef();

  // const toggleAudio = () => {
  //   const audioElement = audioRef.current;

  //   if (isPlaying) {
  //     audioElement.pause();
  //   } else {
  //     audioElement.play();
  //   }

  //   setIsPlaying(!isPlaying);
  // };

  return (
    <>
      {/* Click to play/stop music */}
      <Button>
        <RoundImage
          src={imageCover}
          onClick={toggleAudio}
          width={60}
          height={60}
          alt="music"
          isPlaying={isPlaying}
        />
      </Button>
      <audio ref={audioRef}>
        <source src={music} />
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
  object-fit: cover;
  opacity: ${({ isPlaying }) => (isPlaying ? "1" : "0.5")};
`;
