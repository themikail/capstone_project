import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

export function loginWithSpotify() {
  const clientId = "a7cfeef84deb42289fa131b3fe9babc2";
  const redirectUri = "http://localhost:3000";

  const scopes = ["user-read-private", "user-read-email"];

  const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token`;

  window.location.href = authorizeUrl;
}

export function handleSpotifyCallback() {
  const params = new URLSearchParams(window.location.hash.substr(1));
  const accessToken = params.get("access_token");
  const expiresIn = params.get("expires_in");

  if (accessToken) {
    // Speichere den Zugriffstoken und andere Informationen im Zustand oder der lokalen Speicherung

    // Setze den Zugriffstoken für die Spotify-Web-API-Instanz
    spotifyApi.setAccessToken(accessToken);

    // Führe Anfragen an die Spotify API mit dem zugewiesenen Zugriffstoken durch
    spotifyApi.getMe().then((response) => {
      console.log(response);
      //   router.push("/components/feed"); // Redirect to feed page
    });
  } else {
    // Handle authentication failure
    console.log("Authentication failed");
  }
}
