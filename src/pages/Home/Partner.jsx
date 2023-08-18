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



const Partner = () => {
    return (
        <section className="py-10 lg:px-0 px-5 text-white">
            <div className="max-w-6xl mx-auto">
                <div className="space-y-5 mb-10 lg:w-1/2 mx-auto">
                    <Heading heading="Gameum Partners" />
                    <Description description="We help out different accomplices to assist with adapting their gaming content and broaden our games portfolio and activities." />
                </div>
            </div>
            <div className="pb-10">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-4 md:grid-col md:grid-cols-3 grid-cols-2">
                    <div className=" border-b border-r border-[#837D7D] w-auto H-52 flex justify-center items-center">
                        <img className="w-full p-5" src={img1} alt="" />
                    </div>
                    <div className=" border-b lg:border-r md:border-r border-[#837D7D] w-auto h-52 flex justify-center items-center">
                        <img className="w-full p-5" src={img2} alt="" />
                    </div>
                    <div className=" border-b border-r md:border-r-0 lg:border-r border-[#837D7D] w-auto h-52 flex justify-center items-center">
                        <img className="w-full p-5" src={img3} alt="" />
                    </div>
                    <div className=" border-b lg:border-r-0 md:border-r border-[#837D7D] w-auto h-52 flex justify-center items-center">
                        <img className="w-full p-5" src={img4} alt="" />
                    </div>
                    <div className=" border-r border-b lg:border-b-0 border-[#837D7D] w-auto h-52 flex justify-center items-center">
                        <img className="w-full p-5" src={img5} alt="" />
                    </div>
                    <div className="lg:border-r lg:border-b-0 md:border-b border-b border-[#837D7D] w-auto h-52 flex justify-center items-center">
                        <img className="w-full p-5" src={img6} alt="" />
                    </div>
                    <div className="border-r border-[#837D7D] w-auto h-52 flex justify-center items-center">
                        <img className="w-full p-5" src={img7} alt="" />
                    </div>
                    <div className="md:border-r lg:border-r-0 border-[#837D7D] w-auto h-52 flex justify-center items-center">
                        <img className="w-full p-5" src={img8} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partner;