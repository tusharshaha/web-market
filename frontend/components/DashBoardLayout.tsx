import React from "react";
import { FaRegEye, FaRegUserCircle } from "react-icons/fa";
import {
  MdOutlineBookmarks,
  MdOutlineBusinessCenter,
  MdOutlineSpaceDashboard,
  MdLogout,
} from "react-icons/md";
import { IoDocumentTextOutline, IoSettingsOutline } from "react-icons/io5";

interface DashboardProps {
  children: React.ReactNode;
}

const DashBoardLayout: React.FC<DashboardProps> = ({ children }) => {
  const menus = [
    { icon: <MdOutlineSpaceDashboard />, title: "Dashboard" },
    { icon: <FaRegUserCircle />, title: "My Profile" },
    { icon: <MdOutlineBusinessCenter />, title: "Applied Jobs" },
    { icon: <MdOutlineBookmarks />, title: "Bookmark Jobs" },
    { icon: <IoDocumentTextOutline />, title: "Edit Resume" },
    { icon: <FaRegEye />, title: "View Resume" },
    { icon: <IoSettingsOutline />, title: "Settings" },
    { icon: <MdLogout />, title: "Log Out" },
  ];
  return (
    <div className="relative flex">
      <div className="w-1/5">
        <div className="bg-slate-900 text-white sticky top-0 h-screen"></div>
      </div>
      <div className="w-4/5">{children}</div>
    </div>
  );
};

export default DashBoardLayout;
