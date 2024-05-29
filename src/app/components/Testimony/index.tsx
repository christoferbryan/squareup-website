import TestimonyCard from "./Card";
import PersonData from "@/utils/Person";

const Testimony : React.FC = () => {
    return (
        <>
            <div className="bg-[#1A1A1A] flex flex-col items-center">
                <div className="bg-zinc-900 text-center flex flex-col justify-center items-center w-[350px] h-[270px] px-[16px] py-[50px] gap-y-[6px]
                border-b border-zinc-600 lg:w-[1280px] lg:h-[280px] lg:gap-y-[10px] lg:px-[250px] lg:py-[100px]">
                    <h2 className="text-white font-semi-bold text-[26px] lg:text-[38px]">What our Clients say About us</h2>
                    <p className="text-[#E6E6E6] font-normal text-[14px] lg:text-[16px]">
                        At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us
                    </p>
                </div>
                <div className='flex flex-col'>
                    {
                        PersonData.map((person, index) => (
                            <div key={index}>
                                <TestimonyCard {...person} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Testimony;