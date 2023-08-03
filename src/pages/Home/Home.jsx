import Blog from "./Blog";
import Details from "./Details";
import Hero from "./Hero";
import Roadmap from "./Roadmap";
import Token from "./Token";


const Home = () => {
    return (
        <div>
            <Hero />
            <Details />
            <Token />
            <Roadmap />
            <Blog />
        </div>
    );
};

export default Home;