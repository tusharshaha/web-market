import SectionTitle from '@/components/common/SectionTitle';
import React from 'react';
import CandidateCard from '../common/CandidateCard';

const BestCandidate: React.FC = () => {
    const candidates = new Array(4).fill(0);
    return (
        <div className='cus-container pb-10'>
            <SectionTitle title='Best Candidate' subTitle='Many desktop publishing packages and web page editors' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    candidates.map((ele, i) => <CandidateCard key={i} />)
                }
            </div>

        </div>
    );
};

export default BestCandidate;