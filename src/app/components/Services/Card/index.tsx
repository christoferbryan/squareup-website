import Image from "next/image";

interface ServicesCardProps {
    icon : any;
    title : string;
    desc : string;
}

const ServicesCard : React.FC<ServicesCardProps> = ({ icon, title, desc }) => {
    return (
        <>
            <div className="flex flex-col justify-center bg-zinc-900 w-[350px] px-[30px] py-[30px] gap-y-[25px] border-x border-b border-zinc-600
            lg:w-[426.67px]">
                <div className="flex gap-x-[15px]">
                    <Image src={icon} alt="icon" width={58} height={58} />
                    <h2 className="font-semi-bold text-white text-[20px]">{title}</h2>
                </div>
                <div className="font-normal text-white text-[14px] text-left">
                    {desc}
                </div>
                <button className="rounded-[6px] bg-[#262626] px-[16px] py-[14px] hover:bg-zinc-800">
                    <span className="font-medium text-white text-[14px]">Learn More</span>
                </button>
            </div>
        </>
    );
}

export default ServicesCard;