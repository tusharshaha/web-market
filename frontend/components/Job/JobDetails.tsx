import Link from 'next/link';
import React from 'react';
import { MdApartment, MdLocationOn } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

interface JobDetails {

}

const JobDetails: React.FC<any> = ({ jobDetails }) => {
  
  return (
    <div className='border relative'>
      <div className=''>
        <div className='p-3 border-b space-y-2 shadow-sm sticky top-0 bg-white border-l-2 border-primary'>
          {/* <img src={jobDetails?.companyLogo} alt='company logo' className='w-[40px] h-[40px]' /> */}
          <h3 className='font-bold'>{jobDetails?.title}</h3>
          <div className='flex justify-between items-end'>
            <div>
              <h4 className='flex items-center gap-2'>
                <span><MdApartment /></span>
                {jobDetails?.companyName}
              </h4>
              <h5 className='flex items-center gap-2'>
                <span><MdLocationOn /></span>
                {
                  jobDetails?.locationRestrictions.length ? "Restricted" : "Remote"
                }
              </h5>
            </div>
            <div>
              <Link className='btn btn-primary font-bold text-white flex items-center gap-2' href={jobDetails?.applicationLink || ""} target='_blank'>Apply Now <FaArrowRightLong /></Link>
            </div>
          </div>
        </div>
        <div className='p-3 jobDetails' dangerouslySetInnerHTML={{ __html: jobDetails?.description }}>

        </div>
      </div>
    </div>
  );
};

export default JobDetails;