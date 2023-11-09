import React from 'react';

const CandidateInfo: React.FC = () => {
  const infos = [
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
      <h2 className='text-2xl font-bold element-highlight before:left-[-22px] relative'>Information</h2>
      <table className='w-full mt-6 text-sm'>
        <tbody>
          {
            infos.map((ele, i) =>
              <tr key={i}>
                <td className='font-semibold pb-4'>{ele.title}</td>
                <td className='px-2 pb-4'>:</td>
                <td className='pb-4'>{ele.value}</td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateInfo;