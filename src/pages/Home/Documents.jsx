
import background from '../../assets/banner/token-supply-bg.jpg'
import { ImFilePdf } from "react-icons/im";
import { GoCheckbox } from "react-icons/go";
import { RxPencil2 } from "react-icons/rx";
import { SlEarphonesAlt } from "react-icons/sl";
import Heading from '../../components/Heading';
import pdf from "../../assets/gameum.pdf";
import { Link } from 'react-router-dom';

const Documents = () => {
    return (
        <section className="document-style" style={{ backgroundImage: `url(${background})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="document-body">
                <div className="max-w-6xl mb-5 mx-auto">
                    <div className="lg:w-1/2 mx-auto text-white">
                        <Heading heading="Documents" />
                    </div>
                </div>
                <div className="max-w-6xl grid lg:grid-cols-4 md:grid-cols-2 gap-5">
                    <div className="lg:w-52 w-80 bg-white hover:bg-yellow-400 hover:text-white rounded shadow-xl card">
                        <div className="card-body text-center">
                            <div className="space-y-7 flex flex-col justify-center items-center">
                                <p className="text-5xl"><ImFilePdf /> </p>
                                <p>White Paper</p>
                            </div>
                            <div className="mt-16 ">
                                <button className="text-[20px] font-semibold relative button-details" onClick={() => window.open(`${pdf}`, '_blank')}>Download</button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-52 w-80 bg-white hover:bg-yellow-400 hover:text-white rounded shadow-xl">
                        <div className="card-body text-center">
                            <div className="space-y-7 flex flex-col justify-center items-center">
                                <p className="text-5xl"><GoCheckbox /> </p>
                                <p>Staking</p>
                            </div>
                            <div className="mt-16 ">
                                <a href="https://g1.gameum.one/login">
                                    <button className="text-[20px] font-semibold relative button-details">Staking Now</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-52 w-80 bg-white hover:bg-yellow-400 hover:text-white rounded shadow-xl">
                        <div className="card-body text-center">
                            <div className="space-y-7 flex flex-col justify-center items-center">
                                <p className="text-5xl"><RxPencil2 /> </p>
                                <p>Explorer</p>
                            </div>
                            <div className="mt-16">
                                <button  onClick={() => window.open(`https://bscscan.com/address/0xa670d686d93e6410317d6648667daf848bbde995`, '_blank')} className="text-[20px] font-semibold relative  button-details">BscScan</button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-52 w-80 bg-white hover:bg-yellow-400 hover:text-white rounded shadow-xl">
                        <div className="card-body text-center">
                            <div className="space-y-7 flex flex-col justify-center items-center">
                                <p className="text-5xl"><SlEarphonesAlt /> </p>
                                <p>24/7 Support</p>
                            </div>
                            <div className="mt-16 ">
                                <Link to="contact">
                                    <button className="text-[20px] font-semibold relative button-details">Help Center</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Documents;