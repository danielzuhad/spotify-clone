export const SCOPES = [
  // Users
  "user-read-email",
  "user-read-private",
  // spotify connect
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  // follow
  "user-follow-modify",
  "user-follow-read",
  // Library
  "user-library-modify",
  "user-library-read",
  // playlist
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-private",
  "playlist-modify-public",
  // playback
  "streaming",
  "ugc-image-upload",
].join(",");

export const SPOTIFY_ACCOUNT = process.env.SPOTIFY_ACCOUNT;

const params = {
  scope: SCOPES,
};

export const LOGIN_URL =
  `${SPOTIFY_ACCOUNT}/authorize?` + new URLSearchParams(params).toString();
