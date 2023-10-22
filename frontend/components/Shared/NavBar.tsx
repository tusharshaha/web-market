import Link from "next/link";
import { useState } from "react";
import { FiMenu } from 'react-icons/Fi';
import { FaAngleLeft } from 'react-icons/fa';
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";


const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleRegister = ()=>{
        router.push("/register");
    }

    const navItem = <>
        <li onClick={handleToggle} className="bg-primary p-2 text-white flex md:hidden items-center justify-between">
            <span>Menu</span>
            <FaAngleLeft />
        </li>
        <li className="p-2 border-y md:border-0 md:p-0"> <Link href='/'>Home</Link> </li>
        <li className="p-2 border-y md:border-0 md:p-0"> <Link href='/jobs'>Jobs</Link> </li>
        <li className="p-2 border-y md:border-0 md:p-0"> <Link href='/candidate'>Candidate</Link> </li>
        <li className="p-2 border-y md:border-0 md:p-0"> <Link href='#'>Projects</Link> </li>
        <li className="p-2 border-y md:border-0 md:p-0"> <Link href='#'>Blogs</Link> </li>
    </>

    return (
        <div className="border-b border-gray-500">
            <div className="cus-container">
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
                        <button onClick={handleRegister} className="web-btn2"> <AiOutlinePlus className=" font-bold mr-2" /> Register</button>
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