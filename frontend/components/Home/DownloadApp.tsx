import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DownloadApp: React.FC = () => {
    return (
        <div className='p-5 w-full bg-primary my-10 py-20 text-center text-white font-bold '>
            <h3 className='text-2xl my-3 '>Download Our Mobile App</h3>
            <h3 className='text-4xl my-5 '>Trial Version Available</h3>
            <h3 className='text-4xl my-5 '>You Can Ready Resume & Apply Job</h3>

            <div className='flex justify-center items-center gap-5 mt-10'>
                <Link href='#'><Image className='rounded-lg' alt='' width={200} height={100} src='/images/google-play.webp'></Image></Link>
                <Link href='#'><Image className='rounded-lg' alt='' width={200} height={100} src='/images/mac-os.webp'></Image></Link>

            </div>

        </div>
    );
};

export default DownloadApp;