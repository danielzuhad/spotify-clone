import React from "react";

type ProviderProps = {
  children: React.ReactNode;
};

const Provider = ({}: ProviderProps) => {
  return (
    <>
      <div>Provider</div>
    </>
  );
};

export default Provider;
