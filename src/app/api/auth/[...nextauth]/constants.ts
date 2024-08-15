export const SCOPES = [
  // Users
  "user-read-email",
  "user-read-private",
  // "user-read-birthdate",

  // Spotify Connect
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",

  // Follow
  "user-follow-modify",
  "user-follow-read",

  // Library
  "user-library-modify",
  "user-library-read",

  // Playlist
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-private",
  "playlist-modify-public",

  // Playback
  "streaming",
  "app-remote-control",

  // Images
  "ugc-image-upload",

  // Listening History
  "user-read-playback-position",
  "user-top-read",
  "user-read-recently-played",

  // Open Access
  // Uncomment if needed
  // "user-soa-link",
  // "user-soa-unlink",
  // "soa-manage-entitlements",
  // "soa-manage-partner",
  // "soa-create-partner",
].join(",");

export const SPOTIFY_ACCOUNT = process.env.SPOTIFY_ACCOUNT;

const params = {
  scope: SCOPES,
};

export const LOGIN_URL =
  `${SPOTIFY_ACCOUNT}/authorize?` + new URLSearchParams(params).toString();
