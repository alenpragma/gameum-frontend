import Blog from "./Blog";
import Details from "./Details";
import Documents from "./Documents";
import Hero from "./Hero";
import Roadmap from "./Roadmap";
import Team from "./Team";
import Token from "./Token";


const Home = () => {
    return (
        <div>
            <Hero />
            <Details />
            <Token />
            <Roadmap />
            <Blog />
            <Team />
            <Documents />
        </div>
    );
};

export default Home;