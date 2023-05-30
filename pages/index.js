import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled, { createGlobalStyle } from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Music</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledBody>
        <StyledMain>
          <Title>
            <h1>Share youre lovely music with Musicc</h1>
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
    </>
  );
}

const StyledMain = styled.div``;

const StyledBody = styled.body`
  background-image: url("/assets/images/login/background/sefo-bg.jpeg");
  background-size: cover;
  background-position: right;
`;

const Title = styled.div`
  color: rgba(30, 215, 96);
  margin-top: 20px;
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

const SpotifyLogo = styled.image`
  margin-right: 10px;
`;
