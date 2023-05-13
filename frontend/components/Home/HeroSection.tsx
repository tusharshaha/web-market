import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <div className="flex justify-start items-center bg-[url('/images/tech-bg.jpg')] bg-no-repeat bg-center bg-cover h-[600px] mt-10">
            <div className="grid grid-cols-2">
                <div className='container mx-auto px-4 uppercase'>
                    <p className='mb-3'>Welcome to Web Service</p>
                    <h3>We deal with the aspects of</h3>
                    <h3>professional Web ervices</h3>
                    <p className='capitalize mt-2'>We carry more than just good coding skills. Our experience makes us stand out from other web development.</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;