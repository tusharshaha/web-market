import SectionTitle from '@/components/common/SectionTitle';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { CgNotes } from 'react-icons/Cg';
import { FiSend } from 'react-icons/Fi';

const HowItWork: React.FC = () => {
    const works = [
        { icon: <AiOutlineUser className='text-4xl text-primary group-hover:text-white' />, title: 'Create an Account' },
        { icon: <CgNotes className='text-4xl text-primary group-hover:text-white' />, title: 'CV/Resume' },
        { icon: <AiOutlineSearch className='text-4xl text-primary group-hover:text-white' />, title: 'Find Your Job' },
        { icon: <FiSend className='text-4xl text-primary group-hover:text-white' />, title: 'Apply Job' },
    ]
    return (
        <div className='py-10 my-10 cus-container'>
            <SectionTitle title='How It Work?' subTitle='Many desktop publishing packages and web page editors' />


            <div className='pt-10'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-10 '>
                    {
                        works.map((ele, i) =><div key={i} className='group'>
                        <div className='w-full flex justify-center items-center '>
                            <span className='p-2 rounded-lg outline-2 outline-dashed  outline-gray-200 group-hover:outline-primary flex justify-center items-center'>
                                <span className='p-3 bg-gray-100 trans group-hover:bg-primary rounded-lg '>
                                    {ele.icon}
                                </span>
                            </span>
                        </div>
                        <div className='text-center my-5'>
                            <h4 className='my-3 font-bold '>{ele.title}</h4>
                            <p className='text-slate-500'>It is long established fact reader distracted readable content</p>
                        </div>
                    </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HowItWork;