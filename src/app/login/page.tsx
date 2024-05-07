import LoginButtonsSection from "./components/LoginButtonsSection";

const Login = async () => {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center pb-36">
        <div className="flex flex-col items-center ">
          <h1 className=" p-2 text-center text-6xl font-semibold max-sm:text-5xl">
            Spotify Clone
          </h1>
          <h2 className="mb-20 mt-5 text-[#b1b1b1]">(Premium only)</h2>

          <LoginButtonsSection />
        </div>
      </div>
    </>
  );
};

export default Login;
