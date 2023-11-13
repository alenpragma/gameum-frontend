
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
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
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

                <Collapse className='w-full shadow-orange-500 shadow-lg' items={items} defaultActiveKey={['1']} onChange={onChange} />
                    </div>
                    <div className="w-full">

                <Collapse className='w-full shadow-orange-500 shadow-lg' items={items} defaultActiveKey={['1']} onChange={onChange} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;