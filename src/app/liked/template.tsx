"use client";

import TemplateWrapper from "../../components/Layout/TemplateWrapper";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TemplateWrapper className="h-full overflow-y-auto">
        {children}
      </TemplateWrapper>
    </>
  );
};

export default Template;
