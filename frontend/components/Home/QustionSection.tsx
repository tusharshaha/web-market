import Image from 'next/image';
import { AiFillMessage } from "react-icons/ai";
import React from 'react';

const QustionSection: React.FC = () => {
  return (
    <div className='cus-container my-28'>
      <div className="grid grid-cols-2 gap-4 text-slate-500 cus-card p-10">
        <div className='flex items-center'>
          <div>
            <h2 className='font-semibold'>Questions about Development</h2>
            <p className='mt-2 mb-6'>Contact one of our technical experts now. Our team is available chat and is ready to answer any questions you may have.</p>
            <button className="rounded bg-blue-600 text-white font-semibold px-6 py-2 flex items-center gap-2 transition duration-300 hover:bg-blue-700">
              <AiFillMessage />
              Chat With Experts
            </button>
          </div>
        </div>
        <div>
          <Image src='/images/agent.png' height={500} width={500} alt="" />
        </div>
      </div>
    </div>
  );
};

export default QustionSection;