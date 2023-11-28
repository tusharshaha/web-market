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
  //   email && router.push("/");
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
  return (
    <div className="relative flex">
      <div className="w-[350px] min-h-screen sticky top-0 bg-slate-800">
        <div className="bg-slate-900 text-white border-b">
          <div className="flex items-center gap-6 pl-3 py-2">
            <span>Image</span>
            <h4>Logo</h4>
          </div>
        </div>
        <div className="text-white text-xl">
          <ul className="pl-3 mt-8 space-y-2">
            {menus.map((menu, i) => (
              <li
                key={i}
                className={`${
                  pathName === menu.href
                    ? "active_menu"
                    : "hover:text-slate-300"
                } py-2 px-3  rounded-l-full`}
              >
                <Link
                  className="flex items-center gap-6"
                  title={menu.title}
                  href={menu.href}
                >
                  <div className="icon">{menu.icon}</div>
                  <span>{menu.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="py-3 pl-6 absolute bottom-0 hover:text-slate-200">
            <div className="flex items-center gap-4 ml-[-10px]">
              <Image
                src="/candidate/1.webp"
                height={50}
                width={50}
                className="w-[40px] h-[40px] rounded-full"
                alt="user image"
              />
              <p className="uppercase">Tushar Kumar Shaha</p>
            </div>
            <button onClick={logout} className="flex items-center gap-6 mt-4">
              <div className="flex items-center justify-center">
                <MdLogout />
              </div>
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full p-6">{children}</div>
    </div>
  );
};

export default DashBoardLayout;
