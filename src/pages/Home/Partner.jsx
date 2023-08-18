import Description from "../../components/Description";

import img1 from '../../assets/partner/1.png';
import img2 from '../../assets/partner/2.png';
import img3 from '../../assets/partner/3.png';
import img4 from '../../assets/partner/4.png';
import img5 from '../../assets/partner/5.png';
import img6 from '../../assets/partner/6.png';
import img7 from '../../assets/partner/7.png';
import img8 from '../../assets/partner/8.png';
import Heading from "../../components/Heading";
import { Link } from "react-scroll";



const Partner = () => {
    return (
        <section className="py-10 lg:px-0 px-5 bg-[#262858] text-white" id="partner">
            <div className="max-w-6xl mx-auto">
                <div className="space-y-5 mb-10 lg:w-1/2 mx-auto">
                    <Heading heading="Gameum Partners" />
                    <Description description="We help out different accomplices to assist with adapting their gaming content and broaden our games portfolio and activities." />
                </div>
            </div>
            <div className="pb-10">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-4 md:grid-col md:grid-cols-3 grid-cols-2">
                    <div className=" border-b border-r partner-body">
                        <Link onClick={() => window.open(`https://explorer.bitquery.io/bsc/token/0xa670d686d93e6410317d6648667daf848bbde995`, '_blank')}>
                            <img className="img-style" src={img1} alt="" />
                        </Link>
                    </div>
                    <div className=" border-b lg:border-r md:border-r partner-body">
                        <Link onClick={() => window.open(`https://www.geckoterminal.com/bsc/pools/0xd7cdb5c485ffbc2e84187fc3c66f4b6752e64aa3`, '_blank')}>
                            <img className="img-style" src={img2} alt="" />
                        </Link>
                    </div>
                    <div className=" border-b border-r md:border-r-0 lg:border-r partner-body">
                        <Link onClick={() => window.open(`https://coinbrain.com/coins/bnb-0xa670d686d93e6410317d6648667daf848bbde995`, '_blank')}>
                        <img className="img-style" src={img3} alt="" />
                        </Link>
                    </div>
                    <div className=" border-b lg:border-r-0 md:border-r partner-body">
                        <Link onClick={() => window.open(`https://coinsniper.net/coin/33191`, '_blank')}>
                        <img className="img-style" src={img4} alt="" />
                        </Link>
                    </div>
                    <div className=" border-r border-b lg:border-b-0 partner-body">
                        <Link onClick={() => window.open(`https://coinmooner.com/coin/gameum-token-g1`, '_blank')}>
                        <img className="img-style" src={img5} alt="" />
                        </Link>
                    </div>
                    <div className="lg:border-r lg:border-b-0 md:border-b border-b partner-body">
                        <Link onClick={() => window.open(`https://bscscan.com/address/0xa670d686d93e6410317d6648667daf848bbde995`, '_blank')}>
                        <img className="img-style" src={img6} alt="" />
                        </Link>
                    </div>
                    <div className="border-r partner-body">
                        <Link onClick={() => window.open(`https://pancakeswap.finance/swap?inputCurrency=0xA670D686D93e6410317d6648667DaF848bBdE995`, '_blank')}>
                        <img className="img-style" src={img7} alt="" />
                        </Link>
                    </div>
                    <div className="md:border-r lg:border-r-0 partner-body">
                        <Link onClick={() => window.open(`https://icoholder.com/`, '_blank')}>
                        <img className="img-style" src={img8} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partner;