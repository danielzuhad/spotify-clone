"use client";

import TemplateWrapper from "../../components/Layout/TemplateWrapper";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TemplateWrapper>{children}</TemplateWrapper>
    </>
  );
};

export default Template;
