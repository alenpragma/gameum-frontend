
import { roadmap } from "../../components";
import Description from "../../components/Description";
import Heading from "../../components/Heading";


const Roadmap = () => {
    return (
        <section className=" lg:px-0 py-10 px-5 text-white bg-gradient-to-b from-[#262858] via-[#262858] to-[#3944d2]" id="roadmap">
            <div className="max-w-6xl mx-auto">
                <div className="space-y-5 my-10 lg:w-1/2 mx-auto">
                    <Heading heading="Roadmap" />
                    <Description description="We are committed to the transparency and accountability of our brands. Check out upcoming milestones on Gameum’s journey from seed through implementation." />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        roadmap.map(data => <div className="shadow bg-white text-black h-70 items-center rounded" key={data.id}>
                            <div className="card-body py-10">
                                <h2 className="text-center font-semibold font-serif text-2xl mb-3">{data.month}</h2>
                                <div className="space-y-5">
                                    {
                                        data.items.map((item)=>(

                                            <p><span className="mr-2">✵</span>{item}</p>
                                        ))
                                    }
                             
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Roadmap;