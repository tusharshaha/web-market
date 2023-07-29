import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu } from 'react-icons/Fi';
import { AiOutlinePlus } from "react-icons/ai";


const NavBar: React.FC = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const [color, setColor] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        } else {
            setColor(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeColor);
        return () => window.removeEventListener('scroll', changeColor);
    }, [])

    const navItem = <>
        <li> <Link href='#'>Find Jobs</Link> </li>
        <li> <Link href='#'>Post Jobs</Link> </li>
        <li> <Link href='#'>Hire Developer</Link> </li>
        <li> <Link href='#'>Blogs</Link> </li>
    </>


    return (
        <div className="container mx-auto">
            <div className="w-full   ">
                <div className="flex justify-between bg-transparent h-[80px] items-center px-3 md:px-0">
                    <div>
                        <h2>Logo</h2>
                    </div>
                    <div className="hidden md:block ">
                        <ul className=" flex justify-center items-center gap-5">
                            {navItem}
                        </ul>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="btn btn-primary text-white btn-sm md:btn-md"> <AiOutlinePlus className=" font-bold mr-2"></AiOutlinePlus> Register</button>
                        <button onClick={handleToggle} className="btn btn-sm btn-primary ml-2 md:hidden"><FiMenu /></button>
                    </div>

                </div>
            </div>
            <div className={`slider ${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed z-30 top-0 left-0`}>
                <div  className="slider-content bg-[#00000080]  h-[100vh] w-[100vw] text-gray-700">
                    <div className="h-[100vh]  w-[300px] bg-white border-r-2 ">
                    <button onClick={handleToggle} className="btn w-full btn-primary">Menu Hide </button>
                    <ul className="border-y-2 my-2 mobileManu">
                        {navItem}
                    </ul>
                    </div>
                    

                </div>
            </div>

        </div>
    );
};

export default NavBar;