import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SectionTitle from '../Shared/SectionTitle';

const JobCirculars: React.FC = () => {
    return (
        <div className='bg-gray-100 p-5 '>
            <div className='container mx-auto pt-20 mt-5 p-5 md:p-0 md:py-20'>
                <SectionTitle title='Recent Job Circulars' subTitle='Many desktop publishing packages and web page editors'/>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-5'>
                    <div className='p-10 bg-white rounded-lg'>
                        <div className='flex '>
                            <Image className='mr-5' width={80} height={80} alt='' src='/images/company.webp'></Image>
                            <div>
                                <Link className='text-2xl font-bold mb-2' href='#'>Darkento Ltd.</Link>
                                <p>New York, USA</p>
                            </div>

                        </div>
                        <h2 className='text-3xl font-bold my-5'>Front-end Developer</h2>
                        <h3 className='text-primary'>Full-time</h3>
                        <p className='my-2'>CSS3, HTML5, Javascript, Bootstrap, Jquery</p>
                        <div className='flex justify-between my-8'>
                            <p><span className='text-xl font-bold'>$5000</span> /monthly</p>
                            <button className='web-btn'>Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCirculars