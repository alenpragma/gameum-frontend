import background from '../../assets/banner/background.jpg'
import Copytext from '../../components/CopyText';


const Blog = () => {
    return (
        <div className="my-10 lg:mx-0 mx-5 blog-style" id="details" style={{ backgroundImage: `url(${background})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className='blog-body'>
                <div className="lg:max-w-6xl mx-auto bg-[rgba(39,39,39,0.73)] lg:flex gap-5 p-10">
                    <div className="lg:w-1/2 space-y-10">
                        <h2 className="text-3xl font-bold">Buy, Hold, and Earn Rewards on $G1</h2>
                        <p>When you buy $G1 tokens, you potentially profit from future price appreciation. Beyond price gains, you can stake $G1 tokens to start earning staking rewards daily.</p>
                        <p>Join the $G1 staking program and earn 11.42% per month and up to 68.5% annual for holding $G1.</p>
                        <button className="blog-button-one">Buy G1 on G1Wallet</button><br />
                        <button className="blog-button-two">Buy G1 on Exchange</button>
                        <div className="text-center">
                            <h2 className='text-2xl font-semibold'>Our Official Contract Address</h2>
                            <p className='mt-5'><Copytext text="0xa670d686d93e6410317d6648667daf848bbde995"/></p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 space-y-8 lg:mt-0 mt-10">
                        <div>
                            <h2 className="font-bold text-2xl">Accelerated and Sustainable Adoption</h2>
                            <p>Gameum (G1) is revolutionizing e-sports, play to earn NFT games and the digital content economy with practical applications of blockchain. We are a team to one of the fastest-growing communities at the intersection of variety gaming, e-sports, and Blockchain.</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-2xl">Token Utility Market Fit</h2>
                            <p>$G1 is used in Gameum’s ecosystem for participation on G1E-sports, earning staking rewards on G1Wallet, boosting promotion perspectives and commitment on the B2B G1 Views advertisement network.</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-2xl">Gameum Ecosystem Loop</h2>
                            <p>The Gameum ecosystem includes the e-sport, gaming, and digital content. Retail users buy and earn $G1 on G1E-sports. Businesses buy $G1 to reward users. Gameum will buy-back and consume $G1 to lessen supply. Traders and investors buy $G1 to benefit from the market dynamics.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;