import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styled, { createGlobalStyle } from "styled-components";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

export default function Login() {
  const handleLogin = () => {
    const clientId = "a7cfeef84deb42289fa131b3fe9babc2";
    const redirectUri = "http://localhost:3000";

    const scopes = ["user-read-private", "user-read-email"];

    const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
      "%20"
    )}&response_type=token`;

    window.location.href = authorizeUrl;
  };

  useEffect(() => {
    const handleSpotifyCallback = () => {
      const params = new URLSearchParams(window.location.hash.substr(1));
      const accessToken = params.get("access_token");
      const expiresIn = params.get("expires_in");

      // Speichere den Zugriffstoken und andere Informationen im Zustand oder der lokalen Speicherung
      // für die weitere Verwendung bei der Interaktion mit der Spotify API

      // Setze den Zugriffstoken für die Spotify-Web-API-Instanz
      spotifyApi.setAccessToken(accessToken);

      // Führe Anfragen an die Spotify API mit dem zugewiesenen Zugriffstoken durch
      spotifyApi.getMe().then((response) => {
        console.log(response);
      });
    };

    // Überprüfe, ob der Zugriffstoken in der URL vorhanden ist
    if (window.location.hash.includes("access_token")) {
      handleSpotifyCallback();
    }
  }, []);

  return (
    <StyledBody>
      <StyledMain>
        <Title>
          <h1>Share your lovely music with Musicc</h1>
        </Title>
        <StyledButton onClick={handleLogin}>
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
