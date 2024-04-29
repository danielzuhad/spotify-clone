import { AlbumType } from "@/type";
import { axiosInstance } from "@/lib/spotify-api";
import AlbumList from "./AlbumList";

interface Props {
  className?: string;
  accessToken: string;
}

const Album = async ({ className, accessToken }: Props) => {
  const response = await axiosInstance.get("/me/playlists", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const datas: AlbumType[] = response.data.items;

  return (
    <>
      <AlbumList className={className} datas={datas} />
    </>
  );
};

export default Album;
