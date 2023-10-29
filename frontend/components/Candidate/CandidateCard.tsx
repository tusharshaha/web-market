import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const CandidateCard: React.FC = () => {
  const router = useRouter();
  return (
    <div className='shadow-md border rounded-md p-3'>
      <div className='flex items-center sm:gap-6 flex-wrap sm:flex-nowrap'>
        <div className='w-1/5'>
          <Image
            src="/candidate/1.webp"
            className='w-full h-full rounded-md'
            height={100}
            width={100}
            alt='candidate image'
          />
        </div>
        <div className='w-full sm:w-3/5 md:border-r-2 md:pr-3'>
          <h3 className='text-xl font-bold'>Tushar Kumar Shaha</h3>
          <h4 className='text-base text-primary'>Web Developer</h4>
          <div className='flex items-center justify-between w-full mt-3'>
            <div>
              <p className='font-bold'>Location</p>
              <p className='text-slate-600'>Chittagong, Bangladesh</p>
            </div>
            <div>
              <p className='font-bold'>Expreince</p>
              <p className='text-center text-slate-600'>02 Years</p>
            </div>
          </div>
        </div>
        <div className='w-full sm:w-1/5 sm:mx-auto sm:text-center text-left space-x-2 sm:space-x-0 sm:mt-0 mt-3'>
          <button className="bg-primary hover:bg-green-700 trans text-white w-[120px] py-1">Short List</button>
          <button onClick={()=>router.push("/candidate/details")} className="bg-primary hover:bg-green-700 trans text-white w-[120px] py-1 mt-2">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;