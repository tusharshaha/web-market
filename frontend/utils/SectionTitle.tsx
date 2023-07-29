import React from 'react';
interface SectionTitleProps {
    title: string;
    subTitle: string;
  }
const SectionTitle:React.FC <SectionTitleProps> = ({ title, subTitle }) => {
    return (
        <>
            <h2 className='text-3xl font-bold text-center my-5'>{title}</h2>
            <h3 className='text-xl text-center my-5'>{subTitle}</h3>
        </>
    );
};

export default SectionTitle;