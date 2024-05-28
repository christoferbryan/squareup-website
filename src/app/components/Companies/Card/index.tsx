import Image from "next/image";

interface CardProps {
    logo : any;
}

const Card : React.FC<CardProps> = ({ logo }) => {
    return (
        <>
            <div className="bg-transparent flex justify-center items-center px-[30px] py-[30px] lg:py-[16px]">
                <Image src={logo} alt="company-logo" width={120} height={40} />
            </div>
        </>
    );
}

export default Card;