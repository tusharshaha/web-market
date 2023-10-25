import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchSection: React.FC = () => {
  return (
    <div className='max-w-2xl md:shadow-lg md:border border-slate-300 rounded mx-auto flex flex-col md:flex-row items-center px-2 text-lg gap-2 md:gap-0'>
      <div className='flex items-center w-full  border md:border-none border-primary rounded-full p-2 md:p-0'>
        <span className='mx-2'><FaSearch /></span>
        <input
          type="text"
          placeholder='project category or keyword'
          className='focus:outline-none text-gray-700 font-medium px-2 placeholder:text-slate-600 placeholder:italic w-full'
        />
      </div>
      <button className='hover:bg-green-700 trans bg-primary px-0 py-2 my-2 md:ml-8 text-white rounded-full md:rounded-lg text-xl font-bold w-full md:w-1/5'>Search</button>
    </div>
  );
};

export default SearchSection;