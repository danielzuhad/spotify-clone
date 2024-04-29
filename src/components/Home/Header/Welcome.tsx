import { SessionType } from "@/type";
import Link from "next/link";

const Welcome = ({ user }: SessionType) => {
  return (
    <div className="glass relative flex w-full  items-center gap-2 overflow-x-hidden rounded-lg  p-3 text-[22px] font-bold  text-primary-default md:gap-5 md:text-[30px]">
      <h1 className="font-normal">Welcome, </h1>
      <h1>{user!.name}</h1>

      <Link className="absolute right-1" href={"/profile"}>
        <img
          src={user.image}
          alt="profile"
          className="aspect-square w-12 rounded-full border object-cover"
        />
      </Link>
    </div>
  );
};

export default Welcome;
