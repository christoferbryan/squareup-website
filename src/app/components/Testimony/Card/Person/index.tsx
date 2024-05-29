import Image from "next/image";

interface PersonProps {
    photo : string;
    name : string;
    position : string;
}

const Person : React.FC<PersonProps> = ({ photo, name, position }) => {
    return (
        <>
            <div className="flex items-center gap-x-[10px] px-[14px] py-[14px] border-2 border-[#262626] rounded-[6px]">
                <Image src={photo} alt="person-photo" width={40} height={40} />
                <div className="flex flex-col gap-y-[0px]">
                    <h2 className="text-[16px] text-white font-medium">{name}</h2>
                    <p className="text-[14px] text-[#E6E6E6] font-normal">{position}</p>
                </div>
            </div>
        </>
    );
}

export default Person;