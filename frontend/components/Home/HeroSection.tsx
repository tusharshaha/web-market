import Image from 'next/image';
import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <div className="flex justify-start items-center bg-[url('/images/tech-bg.jpg')] bg-no-repeat bg-center bg-cover h-[600px]">
            <div className='container mx-auto px-4 uppercase'>
                <p className='mb-3'>Welcome to Web Service</p>
                <h2>Get Your Best and valuable</h2>
                <h2>Web Services</h2>
            </div>
        </div>
    );
};

export default HeroSection;