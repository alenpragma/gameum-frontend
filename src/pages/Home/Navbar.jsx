

import { navLinks } from "../../components";
import { useState } from "react";
import menu from '../../assets/logo/menu.svg';
import close from '../../assets/logo/close.svg';
import { Link } from "react-scroll";
import Logo from "../shared/Logo";
import HomeButton from "../shared/HomeButton";

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    return (
        <div className="max-w-full bg-[#335560] sticky top-0 z-[7000]">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <Logo />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                        <HomeButton />
                        {navLinks.map((nav, i) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white mr-10`}
                            >
                                <Link to={`${nav.id}`} className="uppercase font-semibold" smooth={true} duration={1000}>
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
                                <HomeButton />
                                {navLinks.map((nav, i) => (
                                    <li
                                        key={nav.id}
                                        className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}
                                    >
                                        <Link to={`${nav.id}`} className="uppercase font-semibold" smooth={true} duration={1000}>
                                            {nav.title}
                                        </Link>
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