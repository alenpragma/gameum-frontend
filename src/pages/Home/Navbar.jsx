import { Link } from "react-router-dom";


const Navbar = () => {
    const icon = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    const navItem = <>
        <li><Link>Home</Link></li>
        <li><Link>G1 Details</Link></li>
        <li><Link>TokenMics</Link></li>
        <li><Link>Roadmap</Link></li>
        <li><Link>News</Link></li>
        <li><Link>Login</Link></li>
        <li><Link>Register</Link></li>
    </>
    return (
        <div className="max-w-[2480px] bg-[#335560]">
            <div className="navbar max-w-7xl mx-auto ">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-xl text-white">Gamium</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white font-bold uppercase">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            {icon}
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <button className="px-3 py-2 bg-[#0A2A60] text-white rounded-xl lg:mr-5">Buy G1 Token</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;