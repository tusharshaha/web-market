import Image from 'next/image';
import React, { useState } from 'react';
import JobCardSkelton from './JobCardSkelton';

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

  const handleLoad = () => { setLoad(false) }

  return (
    <div>
      <div onClick={() => setJobId(id)} className={`cursor-pointer hover:shadow-md trans ${id === selectedId ? "border-l-2 border-primary shadow-md" : ""}`}>
        {
          load ? <JobCardSkelton /> : null
        }
        <Image
          src={data.image}
          onLoad={handleLoad}
          height={800}
          width={500}
          alt='job image'
          className='h-full'
        />
      </div>
    </div>
  );
};

export default JobCard;