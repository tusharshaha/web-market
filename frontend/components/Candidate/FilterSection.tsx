import React, { useState } from 'react';
import Slider from '../common/Slider';

const FilterSection: React.FC = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(15);

  const categories = [
    { title: "Web Developer", count: 12 },
    { title: "Front End Developer", count: 12 },
    { title: "UI/UX Developer", count: 12 },
    { title: "Backend Developer", count: 12 },
    { title: "Full Stack Developer", count: 12 },
  ];

  const skills = ["HTML", "CSS", "Tailwind", "Bootstrap", "Javascript", "Node.js", "GraphQL"];

  const handleAddNewSkill = () => {

  }
  return (
    <div className='space-y-4'>
      <form onSubmit={(e) => e.preventDefault()} className='bg-slate-50 p-3 shadow-md'>
        <p className='font-bold element-heighlight relative'>Experience</p>
        <div className='w-full py-6'>
          <Slider
            min={0}
            max={15}
            onChange={({ min, max }) => {
              setMinPrice(min);
              setMaxPrice(max)
            }}
          />
        </div>
        <div className='flex items-center justify-between'>
          <button className="btn btn-primary btn-xs tracking-widest text-white">Filter</button>
          <p className=''>{minPrice} - {maxPrice} Years</p>
        </div>
      </form>

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
        <p className='font-bold element-heighlight relative'>Skills</p>
        <div className='mt-3 flex items-center flex-wrap gap-2'>
          {
            skills.map((ele, i) => <button key={i} className='btn btn-xs capitalize tracking-wider btn-outline btn-primary'>{ele}</button>)
          }
          <button className='btn btn-xs text-white capitalize btn-primary'>Add New +</button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;