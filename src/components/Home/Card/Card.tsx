import Link from "next/link";

type CardProps = {
  name: string;
  images: {
    url: string;
  }[];
  id: string;
};

const Card = ({ name, images, id }: CardProps) => {
  const image = images?.[0]?.url;

  return (
    <>
      <Link
        href={`playlist/${id}`}
        className=" mb-7 flex w-[40vw] flex-col items-center rounded-xl sm:w-28  md:w-36  lg:w-52 xl:w-[210px]  2xl:w-52"
      >
        <picture className="block aspect-square w-full overflow-hidden rounded-lg border-2 border-[#d4d4d4] shadow-sm">
          <img
            src={image}
            className="aspect-square w-full  object-cover transition-all hover:scale-110"
          />
        </picture>
        <h3
          className={`mt-2 line-clamp-1 w-full text-start text-sm font-semibold text-primary-default sm:text-lg lg:text-xl ${name}`}
        >
          {name}
        </h3>
      </Link>
    </>
  );
};

export default Card;
