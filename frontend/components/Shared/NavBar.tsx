import Link from "next/link";

const NavBar: React.FC = () => {
    return (
        <div className="navbar glass fixed top-0">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="flex-none">
                <ul className="flex gap-2">
                    <li><a>Find Jobs</a></li>
                    <li><a>Hire Developer</a></li>
                    <li><a>Post </a></li>
                    <li><a>Login</a></li>
                    <li><a>Sign Up</a></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;