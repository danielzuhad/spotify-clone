import { SessionType } from "@/type";

const Welcome = ({ user }: SessionType) => {
  return (
    <>
      <div className="  flex w-full items-center gap-2 pb-5 text-[30px] font-bold  text-primary-default sm:text-[50px] md:gap-5 md:text-[50px]">
        <h1 className="font-normal">Welcome, </h1>
        <h1>{user!.name}</h1>
      </div>
    </>
  );
};

export default Welcome;
