import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function Post({ songName, coverPhotoSrc }) {
  return (
    <>
      <h2>Modal Content</h2>
      <div>
        <SongInfo>
          <SongCover
            src={coverPhotoSrc}
            alt="Song Cover"
            width={200}
            height={200}
          />
          <SongDetails>
            <SongName>{songName}</SongName>
          </SongDetails>
        </SongInfo>
      </div>
    </>
  );
}

const SongInfo = styled.div`
  display: flex;
  align-items: center;
`;

const SongCover = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

const SongDetails = styled.div`
  margin-left: 20px;
`;

const SongName = styled.h3`
  margin: 0;
`;
