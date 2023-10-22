import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReactStars from "react-rating-stars-component";
import { BiSolidStarHalf } from 'react-icons/Bi';
import { BsFillBookmarkDashFill } from 'react-icons/Bs';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const CandidateCard: React.FC = () => {
  return (
    <div className='p-10 rounded-lg relative bg-gray-100 border-2 border-transparent hover:bg-white hover:border-gray-200 duration-300'>
      <div className='flex justify-center items-center'>
        <Image className='rounded-lg' alt='' width={180} height={100} src='/candidate/1.webp' />
      </div>
      <div className='text-center my-3'>
        <Link className='text-xl font-bold my-3' href=''>Lauran Benitez</Link>
        <h4 className='text-base text-primary my-2'>Web Designer</h4>
        <div className='flex justify-center'>
          <ReactStars
            count={5}
            value={4.5}
            size={20}
            edit={false}
            isHalf={true}
            emptyIcon={<AiOutlineStar />}
            halfIcon={<BiSolidStarHalf />}
            fullIcon={<AiFillStar />}
            activeColor="#ff9600"
          />
        </div>
        <p className='my-2'>CSS3, HTML5, Javascript Bootstrap, Jquery</p>
      </div>
      <div className='flex justify-center items-center mt-5'>
        <button className='btn btn-outline btn-primary'>View Profile</button>
      </div>

      <div className='absolute top-5 right-5'>
        <BsFillBookmarkDashFill className='text-primary text-lg ' />
      </div>
    </div>
  );
};

export default CandidateCard;