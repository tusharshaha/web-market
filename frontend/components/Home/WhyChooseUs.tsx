import React, { ReactElement } from 'react';
import { FaGlobe, FaCog, FaUsers, FaChartLine } from 'react-icons/fa';

type Point = {
  icons: ReactElement,
  title: string,
  message: string
}

const WhyChooseUs: React.FC = () => {
  const points: Point[] = [
    { icons: <FaGlobe />, title: "Enhance Your Web Presence", message: "Boost your online visibility and reach with our web development services." },
    { icons: <FaCog />, title: "Streamline Development Process", message: "Efficiently manage your web development projects with our streamlined process." },
    { icons: <FaUsers />, title: "Define Your Target Audience", message: "Identify and target your ideal audience for maximum impact and engagement." },
    { icons: <FaChartLine />, title: "Leverage Data Analytics", message: "Harness the power of data analytics to gain insights and drive informed decisions." },
  ];
  return (
    <div className='wcu-bg mt-36 flex items-center'>
      <div className="cus-container">
        <div className="grid grid-cols-2">
          <div className='grid grid-cols-2 gap-4'>
              {
                points.map((ele, i)=> <div key={i} className='px-8 cus-card bg-white text-slate-600'>
                  <span>{ele.icons}</span>
                  <h3 className='font-semibold'>{ele.title}</h3>
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