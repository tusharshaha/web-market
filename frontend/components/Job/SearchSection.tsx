import React from 'react';
import { FaSearch } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const SearchSection: React.FC = () => {
  return (
    <div className='max-w-3xl mx-auto md:shadow-lg md:border border-slate-300 rounded'>
      <div className='flex flex-col md:flex-row items-center px-2 text-lg relative gap-3 md:gap-0'>
        <div className='flex items-center w-full md:w-2/5 border md:border-none border-primary rounded-full p-2 md:p-0'>
          <span className='mx-2'><FaSearch /></span>
          <input type="text" placeholder='Job title or Keyword' className='focus:outline-none text-gray-700 font-medium md:border-r-2 border-slate-500 px-2 placeholder:text-slate-700 w-full' />
        </div>
        <div className='flex items-center w-full md:w-2/5 border md:border-none border-primary rounded-full p-2 md:p-0'>
          <span className='ml-2 text-2xl'><MdLocationOn /></span>
          <select className='focus:outline-none px-2 w-full' defaultValue=''>
            <option value="New York">Remote</option>
            <option value="New York">New York</option>
            <option value="California">California</option>
            <option value="Illinois">Illinois</option>
            <option value="Texas">Texas</option>
            <option value="Florida">Florida</option>
          </select>
        </div>
        <button className='hover:bg-green-700 trans bg-primary px-8 py-2 my-2 md:ml-8 text-white rounded-full md:rounded-lg text-xl font-bold w-full md:w-1/5'>Search</button>
      </div>
    </div>
  );
};

export default SearchSection;