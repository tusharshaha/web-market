import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-primary mt-20">
      <div className="cus-container py-16">
        <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-2 gap-4">
          <div className="font-bold text-white">
            <h2>Subscribe for everyday job newsletter</h2>
          </div>
          <form className="w-full h-full flex items-center relative">
            <input
              type="email"
              className="input py-7 px-4 w-full"
              pattern=""
              placeholder="Enter your email"
              id=""
            />
            <button className="btn no-animation absolute right-1 bg-black text-white">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
