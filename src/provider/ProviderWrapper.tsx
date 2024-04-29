"use client";
import store from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

type ProviderWrapperProps = {
  children: React.ReactNode;
};

const ProviderWrapper = ({ children }: ProviderWrapperProps) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default ProviderWrapper;
