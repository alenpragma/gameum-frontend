
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png"
import { navLinks } from "../../components";
import { useState } from "react";
import menu from '../../assets/logo/menu.svg';
import close from '../../assets/logo/close.svg';

const Navbar = () => {
    const icon = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

    const [toggle, setToggle] = useState(false)
    return (
        <div className="max-w-full bg-[#335560] relative">
            <div className="navbar max-w-7xl mx-auto sticky">
                <div className="navbar-start">
                    <Link className="">
                        <img className="w-40" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                        {navLinks.map((nav, i) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white mr-10`}
                            >
                                <Link to={`${nav.id}`} className="uppercase font-semibold">
                                    {nav.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="px-3 py-1 bg-[#47627A] rounded-md text-white lg:mr-0 mr-5">Register</Link>
                    <div className='flex flex-col justify-end items-center lg:hidden'>
                        <img
                            src={toggle ? close : menu}
                            alt='menu'
                            className='w-[28px] h-[28px] object-contain'
                            onClick={() => setToggle((previous) => !previous)}
                        />
                        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-[#335560] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                            <ul className='list-none flex flex-col justify-end items-center flex-1'>
                                {navLinks.map((nav, i) => (
                                    <li
                                        key={nav.id}
                                        className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}
                                    >
                                        <a href={`#${nav.id}`}>
                                            {nav.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;