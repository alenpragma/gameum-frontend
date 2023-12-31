
import Blog from "./Blog";
import Details from "./Details";
import Documents from "./Documents";
import Faq from "./Faq";
import Hero from "./Hero";
import Partner from "./Partner";
import Roadmap from "./Roadmap";
import Team from "./Team";
import Token from "./Token";
import UpcommingMarket from "./UpcommingMarket";



const Home = () => {
    return (
        <div>
            <Hero />
            <Details />
            <Token />
            <Blog />
            <Roadmap />
            <Team />
            <Partner />
      <UpcommingMarket/>
            <Faq/>
            <Documents />
        </div>
    );
};

export default Home;