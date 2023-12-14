/* eslint-disable @next/next/no-img-element */
import DashBoardLayout from "@/components/DashBoardLayout";
import BreadCrumb from "@/components/common/BreadCrumb";
import MsgUser from "@/components/common/MsgUser";
import { NextPage } from "next";

const Messages: NextPage = () => {
  const users = new Array(20).fill(0);
  return (
    <DashBoardLayout>
      <BreadCrumb pathName="Messages" />
      <div className="border flex items-start bg-white h-screen">
        <div className="w-3/12 border-r h-full overflow-y-auto scrollbar">
        <MsgUser className="relative element-highlight before:left-0 bg-slate-100"/>
          {users.map((ele, i) => (
            <MsgUser key={i} className="relative element-highlight-hover hover:before:left-0"/>
          ))}
        </div>
        <div className="w-9/12"></div>
      </div>
    </DashBoardLayout>
  );
};

export default Messages;
