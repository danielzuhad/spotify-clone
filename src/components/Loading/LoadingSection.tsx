import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingSection = () => {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center">
        <div className="animate-spin">
          <AiOutlineLoading3Quarters color="#C7C8CC" size={100} />
        </div>
      </div>
    </>
  );
};

export default LoadingSection;
