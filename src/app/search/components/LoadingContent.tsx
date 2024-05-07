const LoadingContent = () => {
  // Number of divs you want to create
  const numberOfDivs = 8;

  return (
    <>
      {Array.from({ length: numberOfDivs }, (_, index) => (
        <div
          key={index}
          className="mt-4 h-20 w-full animate-pulse rounded-lg bg-[#e8e8e893]"
        />
      ))}
    </>
  );
};

export default LoadingContent;
