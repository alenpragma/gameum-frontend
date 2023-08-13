import { useState } from 'react';
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Copytext = ({ text }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false), 500;
            toast("Text Coppid")
        });
    };

    return (
        <div>
            <span onClick={handleCopy} className='font-bold bg-yellow-500 cursor-pointer rounded text-[14px] p-2 lg:max-w-none max-w-[100px]'>
                {text}
            </span>
            <ToastContainer />
        </div>
    );
};

export default Copytext;