import { AlbumType } from "@/type";
import useHome from "../hooks/useHome";
import AlbumList from "./AlbumList";

interface Props {
  className?: string;
  accessToken: string;
}

const Album = async ({ className, accessToken }: Props) => {
  const { getAlbum } = useHome();

  const albumReponse = await getAlbum({ accessToken });

  const datas: AlbumType[] = albumReponse?.data.items;

  return (
    <>
      <AlbumList className={className} datas={datas} />
    </>
  );
};

export default Album;
