import Image from 'next/image';
import React from 'react';

const QustionSection: React.FC = () => {
  return (
    <div className='cus-container my-28'>
      <div className="grid grid-cols-2 gap-4 text-slate-600 cus-card p-10">
        <div>
          <h2 className='font-semibold'>Questions about Development</h2>
          <p className='mt-2 mb-6'>Contact one of our technical experts now. Our team is available chat and is ready to answer any questions you may have.</p>
          <button className="rounded bg-blue-600 text-white font-semibold px-6 py-2">Chat With Experts</button>
        </div>
        <div>
          <Image src='' height={100} width={100} alt="" />
        </div>
      </div>
    </div>
  );
};

export default QustionSection;