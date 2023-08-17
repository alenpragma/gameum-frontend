import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";


import { token } from "../../components";
import Description from "../../components/Description";
import Heading from "../../components/Heading";

const Token = () => {
    return (
        <section className="py-10 lg:px-0 px-5 bg-[#E9E9E9]" id="token">
            <div className="max-w-6xl mx-auto">
                <div className="space-y-5 my-10 lg:w-1/2 mx-auto">
                    <Heading heading="Gameum Tokenomics" />
                    <Description description="$G1 is a cryptocurrency made exclusively for the exchange and transfer of value in the e-sports, variety gaming, NFTs, and video economy globally. $G1 has only 180 million of total supply and it will be listed on major exchanges as soon as it started the public sale." />
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
                    {
                        token.map(data => <div className="rounded lg:mt-0 mt-5 h-[300px] bg-[#446682] shadow-lg shadow-slate-600" key={data.id}>
                            <div className="card-body flex flex-col justify-center items-center">
                                <img className="w-52" src={data.img} alt="" />
                                <h2 className="card-title text-white">
                                    {data.title}
                                </h2>

                                <div className="-mt-64 -ml-52" style={{ width: "100px", position: 'relative' }}>
                                    <CircularProgressbarWithChildren value={66}
                                        styles={buildStyles({
                                            textSize: '24px',
                                            textColor: '#151515',
                                            pathColor: `#FF0000`,
                                            trailColor: '#d6d6d6',
                                        })}>
                                        <div style={{ fontSize: 24, marginTop: -5 }}>
                                            {data.ratings}%
                                        </div>
                                    </CircularProgressbarWithChildren>;
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Token;