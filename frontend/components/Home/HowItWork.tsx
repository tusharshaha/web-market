import SectionTitle from '@/components/Shared/SectionTitle';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BiSearch } from 'react-icons/Bi';
import { CgNotes } from 'react-icons/Cg';
import { FiSend } from 'react-icons/Fi';

const HowItWork: React.FC = () => {
    return (
        <div className='py-10 my-10 container mx-auto'>
            <SectionTitle title='How It Work?' subTitle='Many desktop publishing packages and web page editors' />


            <div className='pt-10'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-10 '>
                    <div className='group'>
                        <div className='w-full flex justify-center items-center '>
                            <span className='p-2 rounded-lg outline-2 outline-dashed  outline-gray-200 group-hover:outline-primary flex justify-center items-center'>
                                <span className='p-3 bg-gray-100 transition-all duration-500 group-hover:bg-primary rounded-lg '>
                                    <AiOutlineUser className='text-4xl text-primary group-hover:text-white'></AiOutlineUser>
                                </span>
                            </span>
                        </div>
                        <div className='text-center my-5'>
                            <h5 className='my-3 text-xl font-bold '>Create an Account</h5>
                            <h6>It is long established fact reader distracted readable content</h6>
                        </div>
                    </div>
                    <div className='group'>
                        <div className='w-full flex justify-center items-center '>
                            <span className='p-2 rounded-lg outline-2 outline-dashed  outline-gray-200 group-hover:outline-primary flex justify-center items-center'>
                                <span className='p-3 bg-gray-100 transition-all duration-500 group-hover:bg-primary rounded-lg '>
                                    <CgNotes className='text-4xl text-primary group-hover:text-white'></CgNotes>
                                </span>
                            </span>
                        </div>
                        <div className='text-center my-5'>
                            <h5 className='my-3 text-xl font-bold '>CV/Resume</h5>
                            <h6>It is long established fact reader distracted readable content</h6>
                        </div>
                    </div>
                    <div className='group'>
                        <div className='w-full flex justify-center items-center '>
                            <span className='p-2 rounded-lg outline-2 outline-dashed  outline-gray-200 group-hover:outline-primary flex justify-center items-center'>
                                <span className='p-3 bg-gray-100 transition-all duration-500 group-hover:bg-primary rounded-lg '>
                                    <BiSearch className='text-4xl text-primary group-hover:text-white'></BiSearch>
                                </span>
                            </span>
                        </div>
                        <div className='text-center my-5'>
                            <h5 className='my-3 text-xl font-bold '>Find Your Job</h5>
                            <h6>It is long established fact reader distracted readable content</h6>
                        </div>
                    </div>
                    <div className='group'>
                        <div className='w-full flex justify-center items-center '>
                            <span className='p-2 rounded-lg outline-2 outline-dashed  outline-gray-200 group-hover:outline-primary flex justify-center items-center'>
                                <span className='p-3 bg-gray-100 transition-all duration-500 group-hover:bg-primary rounded-lg '>
                                    <FiSend className='text-4xl text-primary group-hover:text-white'></FiSend>
                                </span>
                            </span>
                        </div>
                        <div className='text-center my-5'>
                            <h5 className='my-3 text-xl font-bold '>Save & Apply</h5>
                            <h6>It is long established fact reader distracted readable content</h6>
                        </div>
                    </div>

                </div>


            </div>


        </div>
    );
};

export default HowItWork;