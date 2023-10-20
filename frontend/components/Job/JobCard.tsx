import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import JobCardSkelton from './JobCardSkelton';
import { useRouter } from 'next/router';

interface JobData {
  id: number,
  selectedId: number,
  data: {
    image: string,
    applicationLink: string
  },
  setJobId: React.Dispatch<React.SetStateAction<number>>
}

const JobCard: React.FC<JobData> = ({ data, setJobId, id, selectedId }) => {
  const [load, setLoad] = useState(true);
  const [mobile, setMobile] = useState(false);
  const router = useRouter();
  const handleLoad = () => { setLoad(false) };
  const handleSelectJob = () => {
    if (mobile) {
      return router.push(data.applicationLink);
    }
    setJobId(id);
  }

  useEffect(() => {
    if (typeof global !== 'undefined') {
      const viewportWidth = global.innerWidth;
      if (viewportWidth < 768) {
        setMobile(true)
      }
    }
  }, []);

  return (
    <div>
      <div onClick={handleSelectJob} className={`cursor-pointer hover:shadow-md trans ${id === selectedId ? "border-l-2 border-primary shadow-md" : ""}`}>
        {
          load ? <JobCardSkelton /> : null
        }
        <Image
          src={data.image}
          onLoad={handleLoad}
          height={500}
          width={500}
          alt='job image'
          className='h-full w-full'
        />
      </div>
    </div>
  );
};

export default JobCard;