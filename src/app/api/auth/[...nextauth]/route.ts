import axios, { AxiosResponse } from "axios";
import NextAuth, { Account, NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import SpotifyProvider from "next-auth/providers/spotify";

// Spotify & Refresh Token Start
const SPOTIFY_ACCOUNT = process.env.SPOTIFY_ACCOUNT;

export const scopes = [
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

const params = {
  scope: scopes,
};

const LOGIN_URL =
  `${SPOTIFY_ACCOUNT}/authorize?` + new URLSearchParams(params).toString();

const refreshAccessToken = async ({ token }: { token: JWT }) => {
  try {
    const params = new URLSearchParams();

    params.append("grant_type", "refresh_token");

    params.append("refresh_token", token.refreshToken as string);

    const response = await fetch(`${SPOTIFY_ACCOUNT}/api/token`, {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.SPOTIFY_CLIENT_ID +
              ":" +
              process.env.SPOTIFY_CLIENT_SECRET,
          ).toString("base64"),
      },

      body: params,
    });

    const data = await response.json();

    return {
      ...token,
      accessToken: data.access_token,
      refreshToken: data.refresh_token ?? token.refreshToken,
      accessTokenExpires: Date.now() + data.expires_in * 1000,
    };
  } catch (error) {
    console.error("Error refreshing access token:", console.error(error));
    throw error;
  }
};
// Spotify End

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
      authorization: LOGIN_URL,
    }),
  ],

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXT_PUBLIC_JWT_SECRET,

  callbacks: {
    async jwt({
      token,
      account,
    }: {
      token: JWT;
      account: Account | null;
    }): Promise<JWT> {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.accessTokenExpires = account.expires_at;
        return token;
      }

      // Check if token and accessTokenExpires are defined and valid
      // access token has not expired
      console.log(token);

      if (
        token.accessTokenExpires &&
        Date.now() < Number(token.accessTokenExpires) * 1000
      ) {
        return token;
      }

      // if token expires, it's gonna refresh it
      console.log("token expired, regenerating...");
      const refreshedToken = await refreshAccessToken({ token });
      return refreshedToken as JWT;
    },

    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }): Promise<Session> {
      const user = {
        ...session.user,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        username: token.username,
      };

      return { ...session, user };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
