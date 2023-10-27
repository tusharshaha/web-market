import Layout from '@/components/Layout';
import CandidateCard from '@/components/Candidate/CandidateCard';
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
        <div className='flex items-start gap-6 relative'>
          {/* filter section  */}
          <div className='w w-1/3 h-screen bg-slate-50 sticky top-0'>

          </div>
          {/* candidate list section  */}
          <div className="w-2/3 space-y-4">
            {
              candidates.map((ele, i) => <div key={i} className='shadow-md border rounded-md p-3'>
                <div className='flex items-center gap-6'>
                  <div className=' w-1/5'>
                    <Image
                      src="/candidate/1.webp"
                      className='w-full h-full rounded-md'
                      height={100}
                      width={100}
                      alt='candidate image'
                    />
                  </div>
                  <div className='w-3/5'>
                    <h3 className='text-xl font-bold'>Tushar Kumar Shaha</h3>
                    <h4 className='text-base text-primary'>Web Developer</h4>
                    <div className='flex items-center justify-between w-full mt-3'>
                      <div>
                        <p className='font-bold'>Location</p>
                        <p>Chittagong, Bangladesh</p>
                      </div>
                      <div>
                        <p className='font-bold'>Salary</p>
                        <p>$300/month</p>
                      </div>
                    </div>
                  </div>
                  <div className="divider divider-horizontal"></div>
                  <div className='w-1/5 mx-auto text-center'>
                  <button className="bg-primary text-white w-[100px] py-1">Short List</button>
                  <button className="bg-primary text-white w-[100px] py-1 mt-2">View Details</button>
                  </div>
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