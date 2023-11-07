import React from 'react';

const Skills: React.FC = () => {
  const skils = [
    { title: "Category", value: "Web Developer" },
    { title: "Expected Salary", value: "$1000 / month" },
    { title: "Experience", value: "02 Years" },
    { title: "Language", value: "English, Bangla, Hindi" },
    { title: "Age", value: "25-30 Years" },
    { title: "Gender", value: "Male" },
    { title: "Qualification", value: "BSC, MSC" },
    { title: "Level", value: "Medium" },
  ]
  return (
    <div className='bg-slate-50 rounded-md shadow-md p-6'>
      <h2 className='text-2xl font-bold element-highlight before:left-[-22px] relative'>Skills & Tools</h2>
      
    </div>
  );
};

export default Skills;