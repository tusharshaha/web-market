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
      <p className='font-bold'>Category</p>
      <ul className='ml-3 mt-3 space-y-2'>
        {
          categories.map((ele, i) => <li key={i} className='flex items-center justify-between'>
            <button>{ele.title}</button>
            <span className='text-slate-500 text-sm'>{ele.count}</span>
          </li>)
        }
      </ul>
      <div className="divider"></div>
      
      <p className='font-bold'>Price</p>
    </div>
  );
};

export default FilterSection;