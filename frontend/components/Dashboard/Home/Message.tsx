import MsgUser from "@/components/common/MsgUser";
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
          <MsgUser key={i}/>
        ))}
      </div>
      <div className="p-4 border-t">
        <button className="web-btn2 w-full">Load More</button>
      </div>
    </div>
  );
};

export default Message;
