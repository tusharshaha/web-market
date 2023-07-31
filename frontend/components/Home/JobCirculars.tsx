import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SectionTitle from '../Shared/SectionTitle';

const JobCirculars: React.FC = () => {
    const circulars = new Array(9).fill(0);
    return (
        <div className='bg-gray-100 p-5 '>
            <div className='cus-container pt-20 mt-5 md:py-20'>
                <SectionTitle title='Recent Job Circulars' subTitle='Many desktop publishing packages and web page editors' />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-5'>
                    {
                        circulars.map((ele, i) => <div key={i} className='p-10 bg-white rounded-lg'>
                            <div className='flex items-center gap-6 mb-5'>
                                <Image width={80} height={80} alt='' src='/images/company.webp' />
                                <div>
                                    <Link className='text-xl font-bold mb-2' href='#'>Darkento Ltd.</Link>
                                    <p className='text-slate-500'>New York, USA</p>
                                </div>

                            </div>
                            <h2 className='text-2xl font-bold mb-2'>Front-end Developer</h2>
                            <h3 className='text-primary text-base font-bold'>Full-time</h3>
                            <p className='my-2'>CSS3, HTML5, Javascript, Bootstrap, Jquery</p>
                            <div className='flex items-center justify-between mt-8'>
                                <p><span className='text-xl font-bold'>$5000</span><span className='text-slate-500'>/monthly</span></p>
                                <button className='web-btn'>Apply Now</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default JobCirculars