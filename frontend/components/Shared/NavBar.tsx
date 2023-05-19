import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar: React.FC = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const [color, setColor] = useState<boolean>(false);
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
    return (
        <div className={`navbar ${color ? "bg-blue-800" : ''} border-b-2 border-blue-800 bg-white-200 text-white font-semibold fixed top-0 transition duration-300`}>
            <div className="container mx-auto px-10">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                </div>
                <div className="flex-none">
                    <ul className="flex gap-2">
                        <li><Link className="transition duration-300 hover:text-error" href="">Find Jobs</Link></li>
                        <li><Link className="transition duration-300 hover:text-error" href="">Hire Developer</Link></li>
                        <li><Link className="transition duration-300 hover:text-error" href="">Post Jobs</Link></li>
                        <li><Link className="transition duration-300 hover:text-error" href="">Login</Link></li>
                        <li><Link className="transition duration-300 hover:text-error" href="">Sign Up</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;