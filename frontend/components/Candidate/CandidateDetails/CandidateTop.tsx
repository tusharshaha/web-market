import Image from 'next/image';
import React from 'react';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';

const CandidateTop = () => {
  return (
    <div className='bg-slate-50 rounded-md shadow-md p-10 flex flex-col lg:flex-row items-center lg:justify-between gap-4'>
      <div className='flex flex-col lg:flex-row items-center text-center lg:text-left gap-4'>
        <div>
          <Image
            src="/candidate/1.webp"
            className='w-full h-full rounded-md'
            height={100}
            width={100}
            alt='candidate image'
          />
        </div>
        <div className=''>
          <h3 className='text-xl font-bold'>Tushar Kumar Shaha</h3>
          <h4 className='text-base text-primary'>Web Developer</h4>
          <ul className='flex items-center gap-6 text-sm mt-2'>
            <li className='flex items-center gap-2'><FaLocationDot /> Chittagong, Bangladesh</li>
            <li className='flex items-center gap-2'><FaPhone /> +88 0123456789</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <button className="btn btn-outline btn-primary btn-sm lg:btn-md">Short List</button>
        <button className="btn btn-primary text-white btn-sm lg:btn-md">Download Resume</button>
      </div>
    </div>
  );
};

export default CandidateTop;