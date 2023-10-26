import React from 'react';

const FilterSection: React.FC = () => {
  const categories = [
    { title: "E-Commerce", count: 12 },
    { title: "Management", count: 12 },
    { title: "Courses", count: 12 },
    { title: "Blog", count: 12 },
  ];
  return (
    <div>
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

      <div className='mt-4 bg-slate-50 p-3 shadow-md'>
        <p className='font-bold element-heighlight relative'>Price</p>
        
      </div>
    </div>
  );
};

export default FilterSection;