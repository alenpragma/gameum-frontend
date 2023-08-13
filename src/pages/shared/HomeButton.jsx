import { Link } from "react-router-dom";


const HomeButton = () => {
    return (
        <li
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}
        >
            <Link to="/" className="uppercase font-semibold">
                Home
            </Link>
        </li>
    );
};

export default HomeButton;