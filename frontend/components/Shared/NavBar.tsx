const NavBar: React.FC = () => {
    return (
        <div className="navbar glass fixed top-0">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="flex gap-2">
                    <li><a>Developers</a></li>
                    <li><a>Blogs</a></li>
                    <li><a>Jobs</a></li>
                    <li><a>Login</a></li>
                    <li><a>Sign Up</a></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;