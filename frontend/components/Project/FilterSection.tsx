import React, { useState } from 'react';
import Slider from '../common/Slider';

const FilterSection: React.FC = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(190);

  const categories = [
    { title: "E-Commerce", count: 12 },
    { title: "Management", count: 12 },
    { title: "Portfolio", count: 12 },
    { title: "Courses", count: 12 },
    { title: "Blog", count: 12 },
  ];
  return (
    <div className='space-y-4'>
      <div className='bg-slate-50 p-3 shadow-md'>
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

      <div className='bg-slate-50 p-3 shadow-md'>
        <p className='font-bold element-heighlight relative'>Price</p>
        <div className='w-full py-6'>
          <Slider
            min={0}
            max={190}
            onChange={({ min, max }) => {
              setMinPrice(min);
              setMaxPrice(max)
            }}
          />
        </div>
        <div className='flex items-center justify-between'>
          <button className="btn btn-primary btn-xs tracking-widest text-white">Filter</button>
          <p className='text-sm text-slate-500'>Price: ${minPrice} - ${maxPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;