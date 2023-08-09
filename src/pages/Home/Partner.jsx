import Description from "../../components/Description";
import Title from "../../components/title";

import img1 from '../../assets/logo/1.jpg';
import img2 from '../../assets/logo/2.jpg';
import img3 from '../../assets/logo/3.jpg';
import img4 from '../../assets/logo/4.jpg';
import img5 from '../../assets/logo/5.jpg';
import img6 from '../../assets/logo/6.jpg';
import img7 from '../../assets/logo/7.jpg';
import img8 from '../../assets/logo/8.jpg';


const Partner = () => {
    return (
        <section className="m-10 mx-5">
            <div className="max-w-6xl mx-auto">
                <div className="space-y-5 my-10 lg:w-1/2 mx-auto">
                    <Title title="Gameum Partners" />
                    <Description description="We help out different accomplices to assist with adapting their gaming content and broaden our games portfolio and activities." />
                </div>
            </div>
            <div className="my-20">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-4 md:grid-col md:grid-cols-3 grid-cols-2">
                    <div className=" border-b border-r border-[#837D7D] w-auto H-52 flex justify-center items-center">
                        <img className="w-full" src={img6} alt="" />
                    </div>
                    <div className=" border-b lg:border-r md:border-r border-[#837D7D] w-auto h-52 flex justify-center items-center">
                        <img className="w-full" src={img2} alt="" />
                    </div>
                    <div className=" border-b border-r md:border-r-0 lg:border-r border-[#837D7D] w-auto h-52 flex justify-center items-center">
                        <img className="w-full" src={img3} alt="" />
                    </div>
                    <div className=" border-b lg:border-r-0 md:border-r border-[#837D7D] w-auto h-52 flex justify-center items-center">
                        <img className="w-full" src={img4} alt="" />
                    </div>
                    <div className=" border-r border-b lg:border-b-0 border-[#837D7D] w-auto h-52 flex justify-center items-center">
                        <img className="w-full" src={img5} alt="" />
                    </div>
                    <div className="lg:border-r lg:border-b-0 md:border-b border-b border-[#837D7D] w-auto h-52 flex justify-center items-center">
                        <img className="w-full" src={img6} alt="" />
                    </div>
                    <div className="border-r border-[#837D7D] w-auto h-52 flex justify-center items-center">
                        <img className="w-full" src={img7} alt="" />
                    </div>
                    <div className="md:border-r lg:border-r-0 border-[#837D7D] w-auto h-52 flex justify-center items-center">
                        <img className="w-full" src={img8} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partner;