import React from 'react';
import { BiSearch } from 'react-icons/Bi'

const HeroSection = () => {
    return (
        <div className='w-full h-[calc(100vh-80px)]  flex justify-center items-center'>
            <div className='p-5 md:p-0'>
                <div className='text-center'>
                    <h2 className='font-bold my-5'><span className='text-primary'>3,500+</span> job available</h2>
                    <h2 className='font-bold my-5'> You can choose your dream job</h2>
                    <h2 className='text-xl my-5'>   Find great job for build your bright career. Have many job in this plactform.</h2>

                </div>
                <div className=' flex flex-col md:flex-row justify-between gap-2 items-center mt-10'>
                    <div className='flex gap-2 flex-col sm:flex-row w-full justify-between items-center'>
                        <input className='w-full sm:w-[300px] md:w-[250px] lg:w-[300px] p-5 bg-white rounded-lg  text-gray-700 outline-none border-gray-200' type="text" placeholder='Job title or Keyword' />
                        <select className='w-full sm:w-[300px] md:w-[200px] p-5 bg-white rounded-lg  text-gray-700 outline-none border-gray-200' defaultValue=''>
                            <option value="" disabled>Choose City</option>
                            <option value="New York">New York</option>
                            <option value="California">California</option>
                            <option value="Illinois">Illinois</option>
                            <option value="Texas">Texas</option>
                            <option value="Florida">Florida</option>
                        </select>
                    </div>
                    <div className='flex gap-2 flex-col sm:flex-row w-full justify-between items-center'>
                        <select className='w-full sm:w-[300px] md:w-[200px] p-5 bg-white rounded-lg  text-gray-700 outline-none border-gray-200' defaultValue=''>
                            <option value="" disabled>Select Category</option>
                            <option value="2">Web Designer</option>
                            <option value="3">Web Developer</option>
                            <option value="4">Graphic Designer</option>
                            <option value="5">App Developer</option>
                            <option value="6">UI &amp; UX Expert</option>
                        </select>
                        <button className='w-full flex justify-center items-center sm:w-[300px]  md:w-auto bg-primary p-5 text-white rounded-lg text-xl font-bold'><BiSearch className='font-bold' /> </button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
