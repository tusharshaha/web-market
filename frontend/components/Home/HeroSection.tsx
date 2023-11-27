import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex justify-center items-center">
      <div className="p-5 md:p-0">
        <div className="text-center">
          <h2 className="font-bold my-5">
            <span className="text-primary">3,500+</span> job available
          </h2>
          <h2 className="font-bold my-5"> You can choose your dream job</h2>
          <h2 className="text-xl my-5">
            Find great job for build your bright career. Have many job in this
            plactform.
          </h2>
        </div>
        <div className=" flex flex-col md:flex-row justify-between gap-2 items-center mt-10">
          <div className="flex gap-2 flex-col md:flex-row w-full justify-center items-center">
            <input
              className="input w-full sm:w-[300px] md:w-[250px] lg:w-[300px] p-5 rounded-lg  text-gray-700 border-gray-200 font-semibold"
              type="text"
              placeholder="Job title or Keyword"
            />
            <select
              className="select w-full sm:w-[300px] md:w-[200px] p-3 rounded-lg  text-gray-700 border-gray-200"
              defaultValue=""
            >
              <option value="New York">Remote</option>
              <option value="New York">New York</option>
              <option value="California">California</option>
              <option value="Illinois">Illinois</option>
              <option value="Texas">Texas</option>
              <option value="Florida">Florida</option>
            </select>
            <button
              className="w-full flex justify-center items-center sm:w-[300px]  md:w-auto
                        btn btn-primary px-5 py-3 text-white rounded-lg font-bold"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
