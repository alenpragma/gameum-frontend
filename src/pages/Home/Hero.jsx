import banner from "../../assets/banner/banner.jpg"

const Hero = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${banner})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="hero-text">
                <div className=" space-y-5 lg:max-w-5xl">
                    <h2 className="font-sans">MOST POPULAR GAMING CRYPTOCURRENCY</h2>
                    <h2 className="font-bold lg:text-6xl text-3xl">Welcome To Gameum Ecosystem</h2>
                    <p className="text-[20px]">We are a team to one of the fastest-growing communities at the intersection of variety gaming, e-sports, and Blockchain.</p>

                </div>
                <div className="mt-5 lg:flex justify-center gap-3">
                    <button className="button lg:mb-0 mb-5">Join Private Sale</button><br />
                    <button className="button">Whitepaper</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;