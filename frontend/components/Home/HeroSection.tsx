import Image from 'next/image';
import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <div className="hero-bg">
            <div className='cus-container pt-[80px] pb-[210px] text-white grid grid-cols-2'>
                <div className='flex items-center px-6 capitalize'>
                    <div>
                        <h1 className='font-bold mb-4'>The Manage Web Development Services</h1>
                        <p className='font-medium'>Build your dream website with our <span className='text-error'>web development</span> services. We offer a wide range of services to help you create a website that meets your needs.</p>
                        <div className='flex mt-8 font-semibold'>
                            <button className='me-8 hero-btn'>View Jobs</button>
                            <button className='hero-btn2'>Hire Developer</button>
                        </div>
                    </div>
                </div>
                <div className='mr-[-40px]'>
                    <Image src='/images/hero-img.png' height={680} width={680} alt="hero img" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;