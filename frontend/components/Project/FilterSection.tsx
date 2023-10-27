import React, { useState } from 'react';

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
    <div>
      <form onSubmit={(e) => e.preventDefault()} className='bg-slate-50 p-3 shadow-md'>
        <p className='font-bold element-heighlight relative'>Price</p>
        <div className='flex items-center my-4 gap-2 w-full'>
          <input
            className='w-full border-2 px-2'
            value={0}
            title='Use number'
            type="text"
            pattern='^\d*$'
          />
          <span>-</span>
          <input
            className='w-full border-2 px-2'
            value={100}
            type="text"
            pattern='^\d*$'
          />
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