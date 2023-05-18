import Image from 'next/image';
import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <div className="hero-bg">
            <div className='container mx-auto px-10 pt-[80px] pb-[210px] text-white grid grid-cols-2'>
                <div className='flex items-center px-6'>
                    <div>
                        <h1 className='font-bold mb-4'>The Manage Web Development Services</h1>
                        <p className='font-medium pr-14'>Touch the success! Domain and Secure Web Hosting from <span className='text-error'>$4.99 per month</span></p>
                    </div>
                </div>
                <div className='mr-[-50px]'>
                    <Image src='/images/hero-img.png' height={680} width={680} alt="hero img" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;