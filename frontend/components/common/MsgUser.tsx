/* eslint-disable @next/next/no-img-element */
import React from "react";

const MsgUser: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`${className} flex items-center gap-3 border-b p-4 hover:bg-slate-100 trans`}>
      <div className={`${className ? "w-3/12" :"w-2/12"} avatar online`}>
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
        <p className="truncate text-slate-500 text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
          inventore!
        </p>
        <p className="text-primary text-xs mt-1 font-bold">5 min ago</p>
      </div>
    </div>
  );
};

export default MsgUser;
