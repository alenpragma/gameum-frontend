import logo from '../../assets/logo/logo.png';
import { FaFacebook, FaLinkedinIn, FaTelegram, FaYoutube } from "react-icons/fa";
import HomeButton from '../shared/HomeButton';
import { navLinks } from '../../components';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-[#161D2C] to-[#161D2C] text-white">
            <footer className="footer max-w-7xl lg:flex justify-center mx-auto p-10">
                <div className='lg:w-4/12 text-[18px]'>
                    <img src={logo} alt="" />
                    <p>Gameum (G1) is the world’s fastest-growing community at the intersection of variety of gaming, e-sports, and blockchain.</p>
                    <p className='mt-5'>65 St. Road, Brooklyn, NY, United States</p>
                </div>
                <div className='flex justify-around lg:w-8/12'>
                    <div className='flex flex-col justify-start items-start'>
                        <span className="footer-title">Importent Menu</span>
                        <div className="navbar-center">
                            <ul className='space-y-3'>
                                <HomeButton />
                                {navLinks.map((nav, i) => (
                                    <li
                                        key={nav.id}
                                        className={`cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white mr-10`}
                                    >
                                        <Link to={`${nav.id}`} className="font-semibold" smooth={true} duration={1000}>
                                            {nav.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <span className="footer-title">Social</span>
                        <div className="grid grid-flow-col gap-4">
                            <FaFacebook onClick={() => window.open(`https://www.facebook.com/Gameum.one`, '_blank')} className='text-3xl cursor-pointer' />
                            <FaLinkedinIn onClick={() => window.open(`https://www.linkedin.com/company/gameum1/`, '_blank')} className='text-3xl cursor-pointer' />
                            <FaYoutube onClick={() => window.open(`https://www.youtube.com/@gameum-g1token17`, '_blank')} className='text-3xl cursor-pointer' />
                            <FaTelegram onClick={() => window.open(`https://t.me/g1token`, '_blank')} className='text-3xl cursor-pointer' />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;