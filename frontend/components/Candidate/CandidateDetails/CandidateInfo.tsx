import React from 'react';

const CandidateInfo: React.FC = () => {
  return (
    <div className='bg-slate-100 rounded-md shadow-sm p-6'>
      <h2 className='text-3xl font-bold element-highlight before:left-[-22px] relative'>Information</h2>
      <table className='w-full mt-6 text-base'>
        <tbody>
          <tr>
            <td className='font-semibold pb-3'>Category</td>
            <td className='px-2 pb-3'>:</td>
            <td className='pb-3'>Hello</td>
          </tr>
          <tr>
            <td className='font-semibold pb-3'>Category</td>
            <td className='px-2 pb-3'>:</td>
            <td className='pb-3'>Hello</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default CandidateInfo;