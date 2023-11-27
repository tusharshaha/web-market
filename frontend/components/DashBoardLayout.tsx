import React from "react";
import { FaRegEye, FaRegUserCircle } from "react-icons/fa";
import {
  MdOutlineBookmarks,
  MdOutlineBusinessCenter,
  MdOutlineSpaceDashboard,
  MdLogout,
} from "react-icons/md";
import { IoDocumentTextOutline, IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/router";

interface DashboardProps {
  children: React.ReactNode;
}

const DashBoardLayout: React.FC<DashboardProps> = ({ children }) => {
  const menus = [
    {
      icon: <MdOutlineSpaceDashboard />,
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: <FaRegUserCircle />,
      title: "My Profile",
      href: "/dashboard/profile",
    },
    {
      icon: <MdOutlineBusinessCenter />,
      title: "Applied Jobs",
      href: "/dashboard/applications",
    },
    {
      icon: <MdOutlineBookmarks />,
      title: "Bookmark Jobs",
      href: "/dashboard/bookmarks",
    },
    {
      icon: <IoDocumentTextOutline />,
      title: "Edit Resume",
      href: "/dashboard/edit_resume",
    },
    { icon: <FaRegEye />, title: "View Resume", href: "/dashboard/resume" },
    {
      icon: <IoSettingsOutline />,
      title: "Settings",
      href: "/dashboard/setting",
    },
  ];
  const pathName = useRouter().pathname;
  return (
    <div className="relative flex">
      <div className="w-1/5">
        <div className="bg-slate-900 text-white sticky top-0 h-screen text-xl">
          <ul className="p-4">
            {menus.map((menu, i) => (
              <li
                key={i}
                className={`${
                  pathName === menu.href ? "bg-primary" : "hover:text-primary"
                } flex items-center gap-2 p-2`}
              >
                <span>{menu.icon}</span>
                <Link href={menu.href}>{menu.title}</Link>
              </li>
            ))}
            <li className="p-2 hover:text-primary">
              <button className="flex items-center gap-2">
                <MdLogout />
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-4/5">{children}</div>
    </div>
  );
};

export default DashBoardLayout;
