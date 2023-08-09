
import { roadmap } from "../../components";
import Description from "../../components/Description";
import Heading from "../../components/Heading";


const Roadmap = () => {
    return (
        <section className="m-10 mx-5" id="token">
            <div className="max-w-6xl mx-auto">
                <div className="space-y-5 my-10 lg:w-1/2 mx-auto">
                    <Heading heading="Roadmap" />
                    <Description description="We are committed to the transparency and accountability of our brands. Check out upcoming milestones on Gameum’s journey from seed through implementation." />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        roadmap.map(data => <div className="shadow-xl bg-gradient-to-r from-[#86EFAC] to-[#877171] lg:mt-5 mt-5 rounded" key={data.id}>
                            <div className="card-body py-5">
                                <h2 className="text-center font-semibold font-serif text-2xl mb-3">{data.month}</h2>
                                <div className="space-y-5">
                                    <p><span className="mr-2">✵</span>{data.item1}</p>
                                    <p><span className="mr-2">✵</span>{data.item2}</p>
                                    <p><span className="mr-2">✵</span>{data.item3}</p>
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