import Layout from '@/components/Layout';
import CandidateCard from '@/components/common/CandidateCard';
import { NextPage } from 'next';
import Image from 'next/image';

const Candidate: NextPage = () => {
  const candidates = new Array(12).fill(0);
  return (
    <Layout
      title=''
      keywords=''
      description=''
    >
      <div className='cus-container my-14'>
        <div className='flex items-start gap-3 relative'>
          {/* filter section  */}
          <div className='w-1/4 h-screen sticky top-0'>

          </div>
          {/* candidate list section  */}
          <div className="w-3/4 space-y-4">
            {
              candidates.map((ele, i) => <div key={i} className='shadow-md border rounded-md p-3'>
                <div className='flex items-start gap-2'>
                  <Image
                    src="/candidate/1.webp"
                    className='w-[70px] h-[70px] rounded-full'
                    height={100}
                    width={100}
                    alt='candidate image'
                  />
                  <div>
                    <h3>Tushar Kumar Shaha</h3>
                    <h4>Web Developer</h4>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <span>Ex: 2y</span>
                  <span>$50/Hour</span>
                </div>
              </div>)
            }
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Candidate;