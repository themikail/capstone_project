import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled, { createGlobalStyle } from "styled-components";

export default function Login() {
  return (
    <StyledBody>
      <StyledMain>
        <Title>
          <h1>Share your lovely music with Musicc</h1>
        </Title>
        <StyledButton>
          <Link href="/components/feed">
            <ButtonText>Login with Spotify</ButtonText>
          </Link>
          <SpotifyLogo>
            <Image
              src="/assets/images/login/spotify/icon4@2x.png"
              width={45}
              height={45}
              alt="Spotify"
            />
          </SpotifyLogo>
        </StyledButton>
      </StyledMain>
    </StyledBody>
  );
}

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledBody = styled.div`
  background-image: url("/assets/images/login/background/sefo-bg.jpeg");
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
`;

const Title = styled.div`
  color: rgba(30, 215, 96);
  margin-top: 20px;
  text-align: center;
  padding: 0 10px;
`;

const StyledButton = styled.button`
  background-color: rgba(30, 215, 96);
  border: none;
  border-radius: 32px;
  color: white;
  display: flex;
  align-items: center;
  width: 260px;
  height: 50px;
  margin-bottom: 80px;
`;

const ButtonText = styled.span`
  font-size: 19px;
  margin-left: 40px;
  color: #fff;
`;

const SpotifyLogo = styled.div`
  margin-right: 10px;
`;
