import Image from "next/image";

interface ChooseCardProps {
    icon : any;
    title : string;
    desc : string;
}

const ChooseCard : React.FC<ChooseCardProps> = ({ icon, title, desc }) => {
    return (
        <>
            <div className="flex flex-col justify-center bg-zinc-900 w-[350px] px-[30px] py-[40px] gap-y-[25px] border-x border-b border-zinc-600
            lg:w-[640px] lg:px-[60px] lg:py-[60px]">
                <div className="flex gap-x-[15px] items-center">
                    <Image src={icon} alt="icon" width={58} height={58} />
                    <h2 className="font-medium text-white text-[20px]">{title}</h2>
                </div>
                <div className="font-normal text-white text-[14px] text-left">
                    {desc}
                </div>
            </div>
        </>
    );
}

export default ChooseCard;