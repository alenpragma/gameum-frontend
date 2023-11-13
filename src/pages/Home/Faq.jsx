
import { Collapse } from 'antd';
import Heading from '../../components/Heading';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;



const items = [
  {
    key: '1',
    label: 'What is Gameum?',
    children: <p>Gameum (G1) is revolutionizing e-sports, play to earn NFT games and the digital content economy with practical applications of blockchain. We are a team to one of the fastest-growing communities at the intersection of variety gaming, e-sports, and Blockchain.</p>,
  },
  {
    key: '2',
    label: 'What is a GameFi token?',
    children: <p>A GameFi token is a cryptocurrency or blockchain-based token specifically designed for use within the gaming and esports industry. It can be used for in-game purchases, trading digital assets, or participating in decentralized gaming platforms.</p>,
  },
  {
    key: '3',
    label: 'How do GameFi tokens differ from other cryptocurrencies?',
    children: <p>GameFi tokens are tailored to the gaming ecosystem, allowing gamers to have more control over their in-game assets and transactions. They often offer unique features, such as interoperability with various games and reward mechanisms.</p>,
  },
];

const items2 = [
  {
    key: '1',
    label: 'What is Gameum Token Utilities good for?',
    children: <p>$G1 is used in Gameum’s ecosystem for participation on G1E-sports, earning staking rewards on G1Wallet, boosting promotion perspectives and commitment on the B2B G1 Views advertisement network.</p>,
  },
  {
    key: '2',
    label: 'Can I convert G1 tokens into traditional fiat currency?',
    children: <p>Yes, you can convert G1 tokens into traditional fiat currency by selling them on a cryptocurrency exchange that supports fiat currency withdrawals. The availability of this option depends on the exchange and your location.</p>,
  },
  {
    key: '3',
    label: 'How can I trade or sell G1 tokens?',
    children: <p>You can trade or sell G1 tokens on various cryptocurrency exchanges that list them. You would need to create an account on an exchange, deposit your tokens, and then place buy or sell orders on the exchange's trading platform.</p>,
  },
];

const Faq = () => {
    const onChange = (key) => {
        console.log(key);
      };
    return (
        <section className="py-10 lg:px-0 px-5 bg-[#262858] text-white" id="Faq">
            <div className="max-w-6xl mx-auto text-center py-10 text-[]">
            <Heading heading="FAQ" />
            </div>
            <div className="pb-10">
                <div className="max-w-6xl mx-auto flex gap-x-3 rounded-md">
                    <div className="w-full">

                <Collapse className='w-full shadow-violet-500 shadow-lg' items={items} defaultActiveKey={['1']} onChange={onChange} />
                    </div>
                    <div className="w-full">

                <Collapse className='w-full shadow-violet-500 shadow-lg' items={items2}  onChange={onChange} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;