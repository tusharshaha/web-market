import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DownloadApp: React.FC = () => {
  return (
    <div className="p-5 mt-14 mb-24 relative w-full bg-[url('../public/images/bg1.webp')] bg-cover py-28 text-center text-white font-bold">
      <div className="before:block before:w-full before:h-full before:bg-[#03a84ded] before:absolute before:inset-0 before:z-10" />
      <div className='relative z-20'>
        <h3 className='my-5'>Trial Version Available from then</h3>
        <h3 className='text-4xl my-3 '>Download Our Mobile App</h3>
        <h3 className='text-4xl'>You Can Ready Resume & Apply Job</h3>
        <div className='flex justify-center items-center gap-5 mt-10'>
          <Link href='#'><Image className='rounded-lg' alt='' width={200} height={100} src='/images/google-play.webp' /></Link>
          <Link href='#'><Image className='rounded-lg' alt='' width={200} height={100} src='/images/mac-os.webp' /></Link>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;