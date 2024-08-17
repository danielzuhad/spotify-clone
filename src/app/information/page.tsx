const Information = async () => {
  return (
    <>
      <div className="flex h-full w-full flex-col items-center ">
        <div className="mt-12 flex w-full flex-col items-center lg:w-[80%] xl:w-[70%] ">
          <h1 className="text-center text-3xl font-semibold lg:text-4xl">
            Information
          </h1>
          <p className="mt-2 w-full text-start text-sm font-light leading-6 text-[#878787fc] lg:text-base">
            Welcome to Spotify Clone,it is designed to deliver a seamless music
            streaming experience similar to Spotify. It allows users to browse
            through a vast library of songs and discover new music through
            personalized recommendations
          </p>

          <h2 className="mt-2 w-full text-start text-base font-bold leading-6 text-[#a6a6a6fc] lg:text-base">
            Features :
          </h2>

          <ul className="ml-12 w-full list-disc text-start text-[#878787fc]">
            <li>Show your current libraries</li>
            <li>Show your liked songs</li>
            <li>Discover new musics</li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col items-center lg:w-[80%] xl:w-[70%]">
          <h1 className="text-start text-3xl font-semibold lg:text-4xl">
            Feedback
          </h1>
          <p className="mt-2 text-start text-sm font-light leading-6 text-[#878787fc] lg:text-base">
            &quot; Thank you for taking the time to participate in the beta
            testing of SpotiClone. We highly value your input and would
            appreciate it if you could share your detailed thoughts,
            experiences, and any suggestions you might have to enhance the
            platform. &quot; -daniel
          </p>

          <p className=" mt-5 text-start text-sm font-light text-[#878787fc] lg:text-base">
            Please send your Feedback so we can make the necessary improvements.
            directly to danielzuhad@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Information;
