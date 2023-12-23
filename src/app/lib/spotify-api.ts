import axios from "axios";

interface getPlaylistResponseProps {
  globalPlaylistId?: number;
  accessToken?: string;
}

export const getPlaylistResponse = async ({
  globalPlaylistId,
  accessToken,
}: getPlaylistResponseProps) => {
  try {
    const response = await axios.get(
      `${process.env.SPOTIFY_API}/v1/playlists/${globalPlaylistId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching playlist:", error);
    throw error;
  }
};
