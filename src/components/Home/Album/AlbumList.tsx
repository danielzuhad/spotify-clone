import cn from "@/lib/cn";
import { AlbumType } from "@/type";
import Card from "../Card/Card";
import LoadingSection from "@/components/Loading/LoadingSection";

interface Props {
  className?: string;
  datas: AlbumType[];
}

const AlbumList = async ({ className, datas }: Props) => {
  if (!datas) {
    return (
      <>
        <LoadingSection />
      </>
    );
  }

  return (
    <>
      <div
        className={cn(
          " flex max-h-full w-full flex-wrap justify-between overflow-y-auto rounded-md xl:gap-5",
          className,
        )}
      >
        {datas.map((data: AlbumType, i: number) => (
          <Card key={i} id={data.id} name={data.name} images={data.images} />
        ))}
      </div>
    </>
  );
};

export default AlbumList;
