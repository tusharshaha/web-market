import React, { useState } from 'react';

const FilterSection: React.FC = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(190);

  const categories = [
    { title: "Web Developer", count: 12 },
    { title: "Front End Developer", count: 12 },
    { title: "UI/UX Developer", count: 12 },
    { title: "Backend Developer", count: 12 },
    { title: "Full Stack Developer", count: 12 },
  ];
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className='bg-slate-50 p-3 shadow-md'>
        <p className='font-bold element-heighlight relative'>Experience</p>
        <div className='flex items-center my-4 gap-2 w-full'>
          <input type="range" min={0} max="100" className="range range-primary range-xs" />
        </div>
        <button className="btn btn-primary btn-xs tracking-widest text-white">Filter</button>
      </form>

      <div className='bg-slate-50 p-3 shadow-md mt-4'>
        <p className='font-bold element-heighlight relative'>Category</p>
        <ul className='ml-3 mt-3 space-y-2'>
          {
            categories.map((ele, i) => <li key={i} className='flex items-center justify-between'>
              <label htmlFor={ele.title} className='flex items-center gap-2 cursor-pointer hover:text-primary w-full'>
                <input type="checkbox" className='' name="" id={ele.title} />
                {ele.title}
              </label>
              <span className='text-slate-500 text-sm'>{ele.count}</span>
            </li>)
          }
        </ul>
      </div>
    </div>
  );
};

export default FilterSection;