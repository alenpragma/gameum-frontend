import banner from "../../assets/banner/banner.jpg"

const Hero = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${banner})`, backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
            <div className="hero-text">
                <div className=" space-y-5 lg:max-w-5xl">
                    <h2 className="font-sans">MOST POPULAR GAMING CRYPTOCURRENCY</h2>
                    <h2 className="font-bold lg:text-6xl text-3xl">Welcome To Gameum Ecosystem</h2>
                    <p className="text-[20px]">We are a team to one of the fastest-growing communities at the intersection of variety gaming, e-sports, and Blockchain.</p>

                </div>
                <div className="mt-5 flex justify-center gap-10">
                    <button className="button">Join Private Sale</button>
                    <button className="button">Whitepaper</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;