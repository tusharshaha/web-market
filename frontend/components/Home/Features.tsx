import React from 'react';

const Features: React.FC = () => {
  return (
    <div className='mt-28 cus-container'>
      <div className='grid grid-cols-2'>
        <div>
          <h2 className='font-semibold'><span className='bg-gradient-to-r from-blue-500 to-indigo-900 text-transparent bg-clip-text'>Discover</span> all Our <br />
            Web Hosting Features</h2>
        </div>
        <div className='ml-20'>
          <p className='text-slate-500'>Focus on your business and avoid all the web development hassles. Our services guarantee unmatched performance, reliability, and choice with 24/7 support that acts as your extended team.</p>
          <a className="mt-4 text-blue-700 font-semibold after:content-['*'] after:ml-0.5 after:text-red-500 after:h-1 after:w-[50px] after:bg-blue-700 block">Show all Features</a>
        </div>
      </div>
    </div>
  );
};

export default Features;