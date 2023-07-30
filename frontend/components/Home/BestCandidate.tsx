import SectionTitle from '@/components/Shared/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiSolidStarHalf } from 'react-icons/Bi';
import { BsFillBookmarkDashFill } from 'react-icons/Bs';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const BestCandidate: React.FC = () => {
    const candidates = new Array(4).fill(0);
    return (
        <div className='cus-container pb-10'>
            <SectionTitle title='Best Candidate' subTitle='Many desktop publishing packages and web page editors' />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    candidates.map((ele, i) => <div key={i} className='p-10 rounded-lg relative bg-gray-100 border-2 border-transparent hover:bg-white hover:border-gray-200 duration-300'>
                        <div className='flex justify-center items-center'>
                            <Image className='rounded-lg' alt='' width={180} height={100} src='/candidate/1.webp'></Image>
                        </div>
                        <div className='text-center my-3'>
                            <Link className='text-xl font-bold my-3' href=''>Lauran Benitez</Link>
                            <h4 className='text-base text-primary my-3'>Web Designer</h4>
                            <div>
                                <h4>rating</h4>
                            </div>
                            <p className='my-3'>CSS3, HTML5, Javascript Bootstrap, Jquery</p>
                        </div>
                        <div className='flex justify-center items-center my-5'>
                            <button className='web-btn2'>View Profile</button>
                        </div>

                        <div className='absolute top-5 right-5'>
                            <BsFillBookmarkDashFill className='text-primary text-lg ' />
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default BestCandidate;