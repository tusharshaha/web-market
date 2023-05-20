import Image from 'next/image';
import React from 'react';

type Point = {
  icons: string,
  title: string,
  message: string,
  class?: string,
}

const WhyChooseUs: React.FC = () => {
  const points: Point[] = [
    { icons: "/images/wcu-icon1.png", title: "Enhance Your Web Presence", message: "Boost your online visibility and reach with our web development services." },
    { icons: "/images/wcu-icon2.png", title: "Streamline Development Process", message: "Efficiently manage your web development projects with our streamlined process.", class: "mt-[40px] mb-[-40px]" },
    { icons: "/images/wcu-icon3.png", title: "Define Your Target Audience", message: "Identify and target your ideal audience for maximum impact and engagement." },
    { icons: "/images/wcu-icon4.png", title: "Leverage Data Analytics", message: "Harness the power of data analytics to gain insights and drive informed decisions.", class: "mt-[40px] mb-[-40px]" },
  ];
  return (
    <div className='wcu-bg mt-36 flex items-center'>
      <div className="cus-container">
        <div className="grid grid-cols-2">
          <div className='grid grid-cols-2 gap-6'>
            {
              points.map((ele, i) => <div key={i} className={`${ele.class} px-8 p-12 cus-card bg-white text-slate-600`}>
                <Image src={ele.icons} height={100} width={100} alt='icons' />
                <h3 className='font-semibold my-2'>{ele.title}</h3>
                <p>{ele.message}</p>
              </div>)
            }
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;