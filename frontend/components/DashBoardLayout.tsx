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
  useEffect(() => {
    if (!email && !isLoading) {
      getProfile();
    }
    email && router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);
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
      <div className="w-[350px] h-screen sticky top-0 bg-slate-800">
        <div className="bg-slate-900 text-white">
          <div className="flex flex-col items-center justify-center text-center flex-wrap p-5">
            <div className="avatar">
              <div className="w-[50px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={userImage}
                  height={100}
                  width={100}
                  alt="user image"
                />
              </div>
            </div>
            <p className="uppercase mt-4">Tushar Kumar Shaha</p>
            <p className="text-slate-300 text-sm">tusharshaha128@gmail.com</p>
          </div>
        </div>
        <div className="text-white text-xl">
          <ul className="pl-5 mt-8">
            {menus.map((menu, i) => (
              <li
                key={i}
                className={`${
                  pathName === menu.href ? "active_menu" : "hover:text-slate-300"
                } flex items-center gap-6 py-2 px-4 rounded-l-full`}
              >
                <span>{menu.icon}</span>
                <Link href={menu.href}>{menu.title}</Link>
              </li>
            ))}
            <li className="py-2 px-4 hover:text-slate-200">
              <button onClick={logout} className="flex items-center gap-6">
                <MdLogout />
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full p-6">{children}</div>
    </div>
  );
};

export default DashBoardLayout;
