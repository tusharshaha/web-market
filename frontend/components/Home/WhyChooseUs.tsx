import React from 'react';

type Point = {
  icons: string,
  title: string,
  message: string
}

const WhyChooseUs: React.FC = () => {
  const points: Point[] = [
    { icons: "", title: "Enhance Your Web Presence", message: "Boost your online visibility and reach with our web development services." },
    { icons: "", title: "Streamline Development Process", message: "Efficiently manage your web development projects with our streamlined process." },
    { icons: "", title: "Define Your Target Audience", message: "Identify and target your ideal audience for maximum impact and engagement." },
    { icons: "", title: "Leverage Data Analytics", message: "Harness the power of data analytics to gain insights and drive informed decisions." },
  ];
  return (
    <div className='wcu-bg mt-36 flex items-center'>
      <div className="cus-container">
        <div className="grid grid-cols-2">
          <div className='grid grid-cols-2 gap-6'>
            {
              points.map((ele, i) => <div key={i} className='px-8 p-12 cus-card bg-white text-slate-600'>
                
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