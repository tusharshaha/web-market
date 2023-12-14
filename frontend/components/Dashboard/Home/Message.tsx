/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MdOutlineMessage } from "react-icons/md";

const Message: React.FC = () => {
  const users = new Array(12).fill(0);
  return (
    <div className="bg-white rounded-md">
      <div className="px-4 py-3 flex items-center justify-between text-white text-base font-semibold bg-[#3159fde6]">
        <div className="flex items-center gap-2">
          <MdOutlineMessage className="" />
          <span>Messages</span>
        </div>
        <button>Mark all as read</button>
      </div>
      <div className="h-[320px] overflow-y-auto scrollbar">
        {users.map((ele, i) => (
          <div key={i} className="flex items-center gap-3 border-b p-4 hover:bg-slate-100 trans">
            <div className="w-2/12 avatar online">
              <img
                src="/candidate/1.webp"
                className="object-cover rounded-full w-full"
                height={100}
                width={100}
                alt="user image"
              />
              
            </div>
            <div className="w-full overflow-hidden">
              <p className="font-bold text-sm mb-0">Tushar Kumar Shaha</p>
              <p className="truncate text-slate-500 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, inventore!</p>
              <p className="text-primary text-xs mt-1 font-bold">5 min ago</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <button className="web-btn2 w-full">Load More</button>
      </div>
    </div>
  );
};

export default Message;
