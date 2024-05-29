import Person from "./Person";

interface TestimonyCardProps {
    header : string;
    desc : string;
    photo : string;
    name : string;
    position : string;
}

const TestimonyCard : React.FC<TestimonyCardProps> = ({ header, desc, photo, name, position }) => {
    return (
        <>
            <div className="flex flex-col justify-center bg-zinc-900 w-[350px] px-[25px] py-[40px] gap-y-[25px] border-x border-b border-zinc-600
            lg:w-[426.67px]">
                <div className="flex flex-col text-left gap-y-[20px]">
                    <h2 className="font-medium text-[18px] text-[#D8FF99]">{header}</h2>
                    <p className="text-[#E6E6E6] text-[14px] font-normal">
                        {desc}
                    </p>
                </div>
                <Person photo={photo} name={name} position={position} />
            </div>
        </>
    );
}

export default TestimonyCard;