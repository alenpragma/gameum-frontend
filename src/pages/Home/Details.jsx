import { detailSideItem, details } from "../../components";
import Description from "../../components/Description";
import background from '../../assets/banner/background.jpg'
import Title from "../../components/title";


const Details = () => {
    return (
        <div className="section-style" style={{backgroundImage: `url(${background})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <div className="section-body">
                <div className="space-y-5 my-10">
                    <Title title="G1 Details" />
                    <Description description="Private Sale dates: March 31th, 2022" />
                </div>
                <div className="lg:max-w-6xl mx-auto bg-[rgba(39,39,39,0.73)] lg:flex rounded  p-10">
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

