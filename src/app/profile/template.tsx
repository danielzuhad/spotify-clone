"use client";

import TemplateWrapper from "../../provider/TemplateWrapper";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TemplateWrapper>{children}</TemplateWrapper>
    </>
  );
};

export default Template;
