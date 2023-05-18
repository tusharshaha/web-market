import Image from 'next/image';
import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <div className="hero-bg">
            <div className='container mx-auto pt-[80px] pb-[210px] text-white grid grid-cols-2'>
                <div className='flex items-center px-6'>
                    <div>
                        <h1>The Manage Web Development Services</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, architecto!</p>
                    </div>
                </div>
                <div>
                    <Image src='/images/hero-img.png' height={650} width={650} alt="hero img" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;