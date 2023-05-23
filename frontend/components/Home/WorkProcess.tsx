import React from 'react';
import { BsInfoCircle } from "react-icons/bs";

const WorkProcess: React.FC = () => {
  return (
    <>
      <div className='my-32 text-center'>
        <h4 className='text-blue-600'>___ Working Process ___</h4>
        <h2>How does we works</h2>
      </div>
      <div className="bg-[url('/images/works-process-line.png')] bg-no-repeat bg-cover h-[230px] text-center">
        <div className="cus-container grid grid-cols-4 gap-6 relative">
          <div className='flex flex-col justify-center gap-4'>
            <div className='border-dashed border-2 border-indigo-600 h-[115px] w-[115px] rounded-full bg-white flex justify-center items-center mx-auto'>
              <span className='bg-blue-400 rounded-full h-[100px] w-[100px] flex items-center justify-center text-6xl text-white block'>
                <BsInfoCircle />
              </span>
            </div>
            <h3>Info Gathering</h3>
            <p className="text-slate-500">Sit amet consectetur adipiscing elit sed eiusmod tempor</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkProcess;