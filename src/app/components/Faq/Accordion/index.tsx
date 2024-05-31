'use client';
import { useState } from "react";
import Image from "next/image";
import closeIcon from '../../../../../public/close.svg';
import plusIcon from '../../../../../public/plus.svg';

interface AccordionProps {
    number : string;
    header : string;
    desc : string;
}

const Accordion : React.FC<AccordionProps> = ({ number, header, desc }) => {
    const [isOpen, setOpen] = useState<boolean>(false);

    const toggleAccordion = () => {
        setOpen(!isOpen);
    }

    return (
        <>
            <div className="relative flex flex-col px-[25px] py-[25px] gap-y-[25px] bg-zinc-900 border-x border-b border-zinc-600 w-[350px] 
             lg:w-[640px] lg:px-[40px]">
                <div className="flex items-center gap-x-[20px] w-[270px] lg:w-[450px] lg:gap-x-[30px]">
                    <h2 className={`font-normal text-[30px] ${isOpen ? 'text-[#C5FF66]' : 'text-white'}`}>{number}</h2>
                    <h2 className={`font-medium text-[16px] ${isOpen ? 'text-[#C5FF66]' : 'text-white'}`}>{header}</h2>
                </div>
                <Image className="cursor-pointer absolute right-4 top-9" onClick={toggleAccordion} src={isOpen ? closeIcon : plusIcon} alt="close-icon" width={26} height={26} />
                {
                    isOpen && (
                        <div className="text-[14px] text-[#E6E6E6] font-normal">
                            {desc}
                        </div>       
                    )
                }
            </div>
        </>
    );
}

export default Accordion;