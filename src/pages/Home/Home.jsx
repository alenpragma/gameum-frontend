
import Blog from "./Blog";
import Details from "./Details";
import Documents from "./Documents";
import Hero from "./Hero";
import Partner from "./Partner";
import Roadmap from "./Roadmap";
import Team from "./Team";
import Token from "./Token";


const Home = () => {
    return (
        <div id="home">
            <Hero />
            <Details />
            <Token />
            <Blog />
            <Roadmap />
            <Team />
            <Partner />
            <Documents />
        </div>
    );
};

export default Home;