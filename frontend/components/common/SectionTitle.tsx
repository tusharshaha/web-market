import React from "react";

interface SectionTitleProps {
  title: string;
  subTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subTitle }) => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center">{title}</h2>
      <h3 className="text-lg text-slate-500 text-center mt-3 mb-10">
        {subTitle}
      </h3>
    </>
  );
};

export default SectionTitle;
