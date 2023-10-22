import Layout from '@/components/Layout';
import CandidateCard from '@/components/common/CandidateCard';
import { NextPage } from 'next';

const Candidate: NextPage = () => {
  const candidates = new Array(12).fill(0);
  return (
    <Layout
      title=''
      keywords=''
      description=''
    >
      <div className='cus-container my-24'>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {
            candidates.map((ele, i) => <CandidateCard key={i} />)
          }
        </div>
      </div>
    </Layout>
  );
};

export default Candidate;