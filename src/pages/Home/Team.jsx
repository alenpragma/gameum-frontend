
import Description from '../../components/Description';
import { team } from '../../components';
import Heading from '../../components/Heading';


// image import

const Team = () => {
    return (
        <section className="m-10 mx-5" id="token">
            <div className="max-w-6xl mx-auto">
                <div className="space-y-5 my-10 lg:w-1/2 mx-auto">
                    <Heading heading="Gameum Team" />
                    <Description description="Gameum is established by a founding team with huge experience in tech and blockchain. We are on the whole energetic and diligent toward building Gameum as a Decentralized Gameum NFTs Marketplace for Play to Earn." />
                </div>
                <div className='grid lg:grid-cols-6 md:grid-col-3 gap-5 my-10'>
                    {
                        team.map(data => <div className="card glass expert-card" key={data.id}>
                            <div className='flex justify-center items-center'>
                                <img className='w-32 p-5 rounded-full border-2 border-cyan-500 white-img' src={data.img} alt="" />
                            </div>
                            <div className="text-center my-5 space-y-2">
                                <h2 className='font-bold'>{data.title}</h2>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;