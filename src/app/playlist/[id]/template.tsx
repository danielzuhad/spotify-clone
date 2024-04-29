import TemplateWrapper from "@/provider/TemplateWrapper";

type TemplateProps = {
  children: React.ReactNode;
};

const Template = ({ children }: TemplateProps) => {
  return (
    <>
      <TemplateWrapper className="h-full overflow-y-auto">
        {children}
      </TemplateWrapper>
    </>
  );
};

export default Template;
