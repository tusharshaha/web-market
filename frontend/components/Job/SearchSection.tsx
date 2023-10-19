import React from 'react';
import { FaSearch } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const SearchSection: React.FC = () => {
  return (
    <div className='max-w-3xl mx-auto shadow-lg border border-slate-300 rounded'>
      <div className='flex items-center px-2 text-lg relative'>
        <span className='mx-2'><FaSearch /></span>
        <input type="text" placeholder='Job title or Keyword' className='w-2/5 focus:outline-none text-gray-700 font-medium border-r-2 border-slate-500 px-2 placeholder:text-slate-700' />
        <span className='ml-2 text-2xl'><MdLocationOn /></span>
        <select className='focus:outline-none w-2/5 px-2' defaultValue=''>
          <option value="New York">Remote</option>
          <option value="New York">New York</option>
          <option value="California">California</option>
          <option value="Illinois">Illinois</option>
          <option value="Texas">Texas</option>
          <option value="Florida">Florida</option>
        </select>
        <button className='hover:bg-green-700 trans bg-primary px-8 py-2 my-2 ml-8 text-white rounded-lg text-xl font-bold'>Search</button>
      </div>
    </div>
  );
};

export default SearchSection;