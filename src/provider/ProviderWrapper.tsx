"use client";
import store from "@/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Provider } from "react-redux";

type ProviderWrapperProps = {
  children: React.ReactNode;
};

const ProviderWrapper = ({ children }: ProviderWrapperProps) => {
  const queryClient = new QueryClient();

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Provider>
    </>
  );
};

export default ProviderWrapper;
