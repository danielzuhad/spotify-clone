import { NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import SpotifyProvider from "next-auth/providers/spotify";
import { LOGIN_URL, SPOTIFY_ACCOUNT } from "./constants";

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
      accessTokenExpires: Date.now() + data.expires_in * 100000,
    };
  } catch (error) {
    console.error("Error refreshing access token:", error);

    // Redirect or signal to redirect to login if refresh fails
    throw new Error("RefreshTokenFailed");
  }
};

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
    async jwt({ token, account }: { token: any; account: any }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.accessTokenExpires = account.expires_at;
        return token;
      }

      // Check if token and accessTokenExpires are defined and valid
      // access token has not expired

      if (
        token.accessTokenExpires &&
        Date.now() >= token.accessTokenExpires * 1000
      ) {
        try {
          const refreshedToken = await refreshAccessToken({ token });
          return refreshedToken;
        } catch (error) {
          console.log("Redirecting to login because token refresh failed");
          throw new Error("RedirectToLogin");
        }
      } else {
        return token;
      }
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
