import { detailSideItem, details } from "../../components";
import Description from "../../components/Description";
import background from '../../assets/banner/background.jpg'
import Heading from "../../components/Heading";


const Details = () => {
    return (
        // style={{backgroundImage: `url(${background})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}
        <div className="section-style bg-gradient-to-t from-[#262858] to-[#3944d2]" id="details" >
            <div className="section-body">
                <div className="space-y-5 my-10">
                    <Heading heading="Gameum Token(G1) Details" />
                    <Description description="Play to Earn Gaming Cryptocurrency" />
                </div>
                <div className="lg:max-w-6xl mx-auto bg-[rgba(39,39,39,0.37)] lg:flex rounded  p-10">
                    <div className="lg:w-8/12">
                        <div className="space-y-8">
                            {
                                details.map(data => <div key={data.id} className="lg:flex items-start gap-10">
                                    <p className="lg:w-3/12 font-bold lg:flex justify-end">{data.name}</p>
                                    <p className="lg:w-8/12 m-0">{data.title}</p>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className="lg:w-4/12 lg:mt-0 mt-5">
                        <div className="space-y-5">
                            {
                                detailSideItem.map(data => <div key={data.id} className="lg:flex items-start gap-10">
                                    <p className="lg:w-6/12 font-bold lg:flex justify-end">{data.title}</p>
                                    <p className="lg:w-6/12 m-0">{data.element}</p>
                                </div>) 
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;

