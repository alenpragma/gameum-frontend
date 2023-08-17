import { Link } from "react-router-dom";


const HomeButton = () => {
    return (
        <li
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 mb-5 lg:mb-0`}
        >
            <Link to="/" className="uppercase font-semibold" smooth={true} duration={1000}>
                Home
            </Link>
        </li>
    );
};

export default HomeButton;