import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu } from 'react-icons/fi';
import { FaAngleLeft, FaRegEye } from 'react-icons/fa';
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineSpaceDashboard, MdOutlineBookmarks, MdLogout } from "react-icons/md";
import { useRouter } from "next/router";
import useAuth from "@/hooks/useAuth";


const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [menu, setMenu] = useState(false);
    const { email, userImage, isLoading, logout } = useAuth();
    const router = useRouter();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleMenu = () => {
        setMenu(!menu);
    };

    const handleRegister = () => {
        router.push("/register");
    }

    const handleLogout = () => {
        logout();
        setMenu(false);
    }
    const navItem = <>
        <li onClick={handleToggle} className="bg-primary p-2 text-white flex md:hidden items-center justify-between">
            <span>Menu</span>
            <FaAngleLeft />
        </li>
        <li className="p-2 border-y md:border-0 md:p-0"> <Link href='/'>Home</Link> </li>
        <li className="p-2 border-y md:border-0 md:p-0"> <Link href='/jobs'>Jobs</Link> </li>
        <li className="p-2 border-y md:border-0 md:p-0"> <Link href='/candidate'>Candidate</Link> </li>
        <li className="p-2 border-y md:border-0 md:p-0"> <Link href='/projects'>Projects</Link> </li>
        <li className="p-2 border-y md:border-0 md:p-0"> <Link href='/blogs'>Blogs</Link> </li>
    </>

    const menuItems = [
        { icon: <MdOutlineSpaceDashboard />, path: "/dashboard", title: "Dashboard" },
        { icon: <FaRegEye />, path: "/resume", title: "View Resume" },
        { icon: <MdOutlineBookmarks />, path: "/dashboard", title: "Bookmark Jobs" },
    ];
    return (
        <div className="border-b border-gray-500">
            <div className="cus-container relative">
                <div className="flex justify-between h-[80px] items-center">
                    <div>
                        <h4>Logo</h4>
                    </div>
                    <div className="hidden md:block ">
                        <ul className="flex justify-center items-center gap-5">
                            {navItem}
                        </ul>
                    </div>
                    <div className="flex justify-center items-center">
                        
                        {!email && isLoading &&
                            <button onClick={handleRegister} className="web-btn2 tracking-widest"> <AiOutlinePlus className="font-bold mr-2" /> Join</button>
                        }
                        {email && !isLoading &&
                            <button onClick={handleMenu} className="avatar">
                                <div className="w-[30px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={userImage} height={100} width={100} alt="user image" />
                                </div>
                            </button>
                        }
                        {/* tooltip menu  */}
                        <div className={`${menu ? "" : "hidden"} absolute top-[70px] right-[11px] bg-white text-black rounded-md py-1`}>
                        <div className="relative">
                        <div className="w-[10px] h-[10px] bg-white absolute top-[-9px] right-[15px] rotate-45"></div>
                        </div>
                            <ul className="w-[170px]">
                                {
                                    menuItems.map((ele, i) => (
                                        <li key={i} className="border-b py-1 px-2 flex items-center gap-2">
                                            <span className="text-primary">{ele.icon}</span>
                                            <Link href={ele.path} className="hover:text-primary">{ele.title}</Link>
                                        </li>
                                    ))
                                }
                                <li className="py-1 px-2">
                                    <button onClick={handleLogout} className="flex items-center gap-2 hover:text-primary">
                                        <span className="text-primary"><MdLogout /></span>
                                        Log Out
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <button onClick={handleToggle} className="btn btn-sm btn-primary ml-2 md:hidden"><FiMenu className="font-bold" /></button>
                    </div>

                </div>
            </div>
            <div className={`slider ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition duration-300 fixed z-30 top-0 left-0`}>
                <div className="slider-content flex bg-[#00000080] h-screen w-[100vw] text-gray-700">
                    <div className="h-[100vh]  w-[300px] bg-white border-r-2 ">
                        <ul className="mobileManu font-bold">
                            {navItem}
                        </ul>
                    </div>
                    <div onClick={() => setIsOpen(!isOpen)} className="h-full flex-1">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;