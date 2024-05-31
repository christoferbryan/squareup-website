import FaqData from "@/utils/Faq";
import Accordion from "./Accordion";

const Faq : React.FC = () => {
    return (
        <>
            <div className="bg-[#1A1A1A] flex flex-col items-center">

                <div className="bg-zinc-900 text-center flex flex-col justify-center items-center w-[350px] h-[220px] px-[16px] py-[50px] gap-y-[6px]
                border-b border-zinc-600 lg:w-[1280px] lg:h-[280px] lg:gap-y-[10px] lg:px-[250px] lg:py-[100px]">
                    <h2 className="text-white font-semi-bold text-[28px] lg:text-[38px]">Frequently Asked Questions</h2>
                    <p className="text-[#E6E6E6] font-normal text-[14px] lg:text-[16px]">
                        Still have any questions? Contact our Team via hello@squareup.com
                    </p>
                </div>

                <div className='flex flex-col lg:hidden'>
                    {
                        FaqData.map((question, index)=>(
                            <div key={index} className="flex items-center justify-center">
                                <Accordion {...question} />        
                            </div>
                        ))
                    }
                </div>

                <div className="w-[1280px] gap-x-[0px] hidden lg:flex">
                    <div className='flex flex-col'>
                        {
                            FaqData.slice(0,4).map((question, index)=>(
                                <div key={index} className="flex items-center justify-center">
                                    <Accordion {...question} />        
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex flex-col'>
                        {
                            FaqData.slice(4,8).map((question, index)=>(
                                <div key={index} className="flex items-center justify-center">
                                    <Accordion {...question} />        
                                </div>
                            ))
                        }
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Faq;