import Image from 'next/image';
import React from 'react';

const ProjectCard: React.FC = () => {
  return (
    <div className='shadow-md border p-2 flex gap-3'>
      <div className='w-2/5'>
        <Image
          src="/images/bg1.webp"
          className='h-[200px] w-full'
          height={500}
          width={500}
          alt='project image'
        />
      </div>
      <div className='w-2/5 border-r-2 border-slate-200'>
        <h2 className='text-lg font-bold'>Io Task - Project Management</h2>
        <p className='text-sm text-slate-500'>By <b>Jhon Doe</b></p>
        <ul className='mt-4 text-slate-500 list-disc ml-6'>
          <li>Unique BuddyPress design</li>
          <li>Built-in Intranet & extranet features</li>
          <li>Powerful & extensive project manager</li>
        </ul>
      </div>
      <div className='w-1/5 flex flex-col items-end justify-end'>
        <div className='text-center w-full'>
          <h3 className='text-lg font-bold'>$60</h3>
          <p className='text-slate-500 text-xs'>14.8k Sales</p>
          <p className='text-slate-500 text-xs'>Last Updated: 18 Oct 2023</p>

          <button className="hover:bg-primary hover:text-white border border-primary trans text-primary px-6 py-1 mt-4">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;