import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Circle } from 'rc-progress';
import { token } from "../../components";
import Description from "../../components/Description";
import Title from "../../components/title";

const Token = () => {
    return (
        <section className="m-10 mx-5" id="token">
            <div className="max-w-6xl mx-auto">
                <div className="space-y-5 my-10 lg:w-1/2 mx-auto">
                    <Title title="Gameum Tokenomics" />
                    <Description description="$G1 is a cryptocurrency made exclusively for the exchange and transfer of value in the e-sports, variety gaming, NFTs, and video economy globally. $G1 has only 180 million of total supply and it will be listed on major exchanges as soon as it started the public sale." />
                </div>
                <div className="lg:grid grid-cols-3 gap-10">
                    {
                        token.map(data => <div className="rounded lg:mt-0 mt-5 h-[300px] bg-green-300" key={data.id}>
                            <div className="card-body flex flex-col justify-center items-center">
                                <img className="w-52" src={data.img} alt="" />
                                <h2 className="card-title">
                                    {data.title}

                                </h2>

                                <div className="-mt-64 -ml-56" style={{ width: "100px", position: 'relative' }}>
                                    <CircularProgressbar
                                        value={data.ratings}
                                        text={`${data.ratings}%`}
                                        styles={buildStyles({
                                            textSize: '20px',
                                            textColor: '#FF0000',
                                            pathColor: `#E60A0A`,
                                            trailColor: '#D6D6D6',
                                            textAlign: 'center'
                                        })}
                                    />
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