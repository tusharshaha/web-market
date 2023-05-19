import Link from 'next/link';
import React, { ReactElement } from 'react';
import { MdOutlineSecurity, MdCode, MdSettings, MdTrendingUp } from "react-icons/md";
import { VscArrowCircleRight } from "react-icons/vsc";

type FS = {
  icons: ReactElement,
  t1: string,
  t2: string,
  message: string
}

const Features: React.FC = () => {
  const features: FS[] = [
    { icons: <MdOutlineSecurity />, t1: "Maximum", t2: "Security", message: "Ensure high-level security for your website. Our advanced measures protect your data and safeguard against threats." },
    { icons: <MdCode />, t1: "Maximum", t2: "Expertise", message: "Benefit from our extensive experience in web development. Our skilled professionals ensure successful project execution." },
    { icons: <MdSettings />, t1: "Custom", t2: "Solutions", message: "Get tailored solutions to meet your business requirements. We analyze your needs and provide personalized strategies." },
    { icons: <MdTrendingUp />, t1: "Optimized", t2: "Performance", message: "Achieve exceptional web application performance and speed. Our optimization delivers exceptional experiences." }
  ];
  return (
    <div className='mt-28 cus-container'>
      <div className='grid grid-cols-2'>
        <div>
          <h2 className='font-semibold'><span className='bg-gradient-to-r from-blue-500 to-indigo-900 text-transparent bg-clip-text'>Discover</span> all Our <br />
            Web Development Features</h2>
        </div>
        <div className='ml-20'>
          <p className='text-slate-500'>Focus on your business and avoid all the web development hassles. Our services guarantee unmatched performance, reliability, and choice with 24/7 support that acts as your extended team.</p>
          <Link href='' className="mt-4 text-blue-700 font-semibold mark">Show all Features</Link>
        </div>
      </div>
      {/* cards  */}
      <div className='grid grid-cols-4 gap-4 mt-20'>
        {
          features.map((ele, i) => <div key={i} className='cus-card text-slate-600'>
            <span className='fs-icon mb-6'>{ele.icons}</span>
            <h3 className='font-semibold'>{ele.t1}</h3>
            <h3 className='font-semibold'>{ele.t2}</h3>
            <p className='mt-4 font-normal'>{ele.message}</p>

            <VscArrowCircleRight className='mt-6 fs-icon2' />
          </div>)
        }
      </div>
    </div>
  );
};

export default Features;