const Faq : React.FC = () => {
    return (
        <>
            <div className="bg-[#1A1A1A] flex flex-col items-center">
                <div className="bg-zinc-900 text-center flex flex-col justify-center items-center w-[350px] h-[220px] px-[16px] py-[50px] gap-y-[6px]
                border-b border-zinc-600 lg:w-[1280px] lg:h-[280px] lg:gap-y-[10px] lg:px-[250px] lg:py-[100px]">
                    <h2 className="text-white font-semi-bold text-[28px]">Frequently Asked Questions</h2>
                    <p className="text-[#E6E6E6] font-normal text-[14px]">
                        Still you have any questions? Contact our Team via hello@squareup.com
                    </p>
                </div>
                <div className='flex flex-col items-center'>

                </div>
            </div>
        </>
    );
}

export default Faq;