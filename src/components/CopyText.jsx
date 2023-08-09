import { useState } from 'react';
import Swal from 'sweetalert2';

const Copytext = ({ text }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };
    if (isCopied) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Coppied Text',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <div>
            <span onClick={handleCopy} className='font-bold bg-yellow-500 cursor-pointer rounded lg:text-[14px] text-[8px] p-2 lg:max-w-none max-w-[100px]'>
                {text}
            </span>
        </div>
    );
};

export default Copytext;