import React, { useEffect } from "react";
import {
  MdOutlineBookmarks,
  MdOutlineBusinessCenter,
  MdOutlineSpaceDashboard,
  MdOutlineMailOutline,
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
  const { isLoading, email, getProfile, logout } = useAuth();
  const handleLogout = () => {
    logout();
    router.push("/");
  };
  useEffect(() => {
    if (!email && !isLoading) {
      getProfile();
    }
    !email && router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);
  const menus = [
    {
      icon: <MdOutlineSpaceDashboard />,
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: <MdOutlineMailOutline />,
      title: "Messages",
      href: "/dashboard/messages",
    },
    {
      icon: <MdOutlineBookmarks />,
      title: "Bookmark Jobs",
      href: "/dashboard/bookmarks",
    },
    {
      icon: <MdOutlineBusinessCenter />,
      title: "Create Projects",
      href: "/dashboard/projects",
    },
    {
      icon: <IoDocumentTextOutline />,
      title: "Resume",
      href: "/dashboard/resume",
    },
    {
      icon: <IoSettingsOutline />,
      title: "Settings",
      href: "/dashboard/settings",
    },
  ];
  return (
    <div className="relative flex">
      <div className="w-[0px] md:w-[350px] max-h-screen overflow-y-auto scrollbar sticky top-0 bg-white text-black border-r text-lg">
        <div className="border-b">
          <div className="pl-5 py-2">
            <Link href="/">Logo</Link>
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
                className="flex items-center gap-5"
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
              className="flex items-center gap-5 group"
            >
              <div className="icon trans">
                <MdLogout />
              </div>
              <span>Log Out</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="w-full bg-slate-50 min-h-screen px-6 py-10">
        {children}
      </div>
    </div>
  );
};

export default DashBoardLayout;
