/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import DashBoardLayout from "@/components/DashBoardLayout";
import BreadCrumb from "@/components/common/BreadCrumb";
import MsgUser from "@/components/common/MsgUser";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import MsgContainer from "@/components/Dashboard/Message/MsgContainer";

const Messages: NextPage = () => {
  const users = new Array(15).fill(0);
  return (
    <DashBoardLayout>
      <BreadCrumb pathName="Messages" />
      <div className="border grid grid-cols-8 bg-white">
        <div className="col-span-2 h-screen border-r overflow-y-auto scrollbar">
          <div className="px-4 py-6 border-b">
            <input
              type="text"
              className="border rounded-full px-4 py-1 bg-slate-100 w-full focus:outline-none"
              placeholder="Search message..."
            />
          </div>
          <MsgUser className="relative element-highlight before:left-0 bg-slate-100" />
          {users.map((ele, i) => (
            <MsgUser
              key={i}
              className="relative element-highlight-hover hover:before:left-0"
            />
          ))}
        </div>
        <div className="col-span-6 relative">
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-start gap-3">
              <div className="w-[65px] avatar online">
                <img
                  src="/candidate/1.webp"
                  className="object-cover rounded-full w-full"
                  height={100}
                  width={100}
                  alt="user image"
                />
              </div>
              <div className="w-full overflow-hidden">
                <p className="font-bold text-base mb-0">Tushar Kumar Shaha</p>
                <p className="text-primary text-sm">Online Now</p>
              </div>
            </div>
            <button className="tooltip icon" data-tip="Delete conversation">
              <FaRegTrashAlt />
            </button>
          </div>
          {/* messages section  */}
          <div className="p-4 h-[calc(100vh-138px)] overflow-y-auto scrollbar">
            <MsgContainer />
          </div>
          <div className="border-t p-2 flex items-center gap-2 sticky bottom-0 bg-white">
            <input
              type="text"
              className="w-full p-2 focus:outline-none"
              placeholder="Type your message"
            />
            <button className="icon hover:bg-primary hover:text-white trans mr-2">
              <BsSend />
            </button>
          </div>
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default Messages;
