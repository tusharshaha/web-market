import React, { useEffect } from "react";
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
import useAuth from "@/hooks/useAuth";
import Image from "next/image";

interface DashboardProps {
  children: React.ReactNode;
}

const DashBoardLayout: React.FC<DashboardProps> = ({ children }) => {
  const router = useRouter();
  const pathName = router.pathname;
  const { isLoading, userImage, name, email, getProfile, logout } = useAuth();
  const handleLogout = () => {
    logout();
    router.push("/");
  };
  // useEffect(() => {
  //   if (!email && !isLoading) {
  //     getProfile();
  //   }
  //   !email && router.push("/");
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [email]);
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
    { icon: <FaRegEye />, title: "Messages", href: "/dashboard/Messages" },
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
    {
      icon: <IoSettingsOutline />,
      title: "Settings",
      href: "/dashboard/setting",
    },
  ];
  return (
    <div className="relative flex">
      <div className="w-[350px] min-h-screen sticky top-0 bg-white text-black border-r text-lg">
        <div className="border-b">
          <div className="flex items-center gap-6 pl-3 py-2">
            <span>Image</span>
            <h4>Logo</h4>
          </div>
        </div>
        <ul className="mt-8 space-y-1">
          {menus.map((menu, i) => (
            <li
              key={i}
              className={`${
                pathName === menu.href ? "active_menu" : "hover:text-primary"
              } py-2 px-5 group trans`}
            >
              <Link
                className="flex items-center gap-6"
                title={menu.title}
                href={menu.href}
              >
                <div className="icon trans">{menu.icon}</div>
                <span>{menu.title}</span>
              </Link>
            </li>
          ))}
          <li className="py-2 px-5 hover:text-primary trans">
            <button
              onClick={handleLogout}
              className="flex items-center gap-6 group"
            >
              <div className="icon trans">
                <MdLogout />
              </div>
              <span>Log Out</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="w-full bg-slate-50 min-h-screen p-6">{children}</div>
    </div>
  );
};

export default DashBoardLayout;
