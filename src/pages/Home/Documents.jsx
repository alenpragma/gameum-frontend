
import background from '../../assets/banner/token-supply-bg.jpg'
import { ImFilePdf } from "react-icons/im";
import { GoCheckbox } from "react-icons/go";
import { RxPencil2 } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";
import Heading from '../../components/Heading';
import DownloadPdf from '../../components/DownloadPdf';
import pdf from "../../assets/gameum.pdf"

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
                                <DownloadPdf pdfUrl={pdf} />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-52 w-80 bg-white hover:bg-yellow-400 hover:text-white rounded shadow-xl">
                        <div className="card-body text-center">
                            <div className="space-y-7 flex flex-col justify-center items-center">
                                <p className="text-5xl"><GoCheckbox /> </p>
                                <p>Terms & Conditions</p>
                            </div>
                            <div className="mt-16 ">
                                <button className="text-2xl font-semibold relative uppercase button-details">Download</button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-52 w-80 bg-white hover:bg-yellow-400 hover:text-white rounded shadow-xl">
                        <div className="card-body text-center">
                            <div className="space-y-7 flex flex-col justify-center items-center">
                                <p className="text-5xl"><RxPencil2 /> </p>
                                <p>Risk Analysis</p>
                            </div>
                            <div className="mt-16 ">
                                <button className="text-2xl font-semibold relative uppercase button-details">Download</button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-52 w-80 bg-white hover:bg-yellow-400 hover:text-white rounded shadow-xl">
                        <div className="card-body text-center">
                            <div className="space-y-7 flex flex-col justify-center items-center">
                                <p className="text-5xl"><FaCartShopping /> </p>
                                <p>Join Private Sale</p>
                            </div>
                            <div className="mt-16 ">
                                <button className="text-2xl font-semibold relative uppercase button-details">Download</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Documents;