import Button from "@/components/Button";
import Button2 from "@/components/Button2";
import Image from "next/image";
import abstract from '../../../../public/abstract.png';

const Hero : React.FC = () => {
    const spanDesign = "lg:rounded-[6px] lg:bg-[#262626] lg:text-white lg:px-[10px] lg:py-[8px] lg:gap-x-[10px] lg:capitalize";

    return (
        <>
            <div className="flex flex-col relative items-center w-full h-[560px] lg:h-[690px] bg-zinc-900 pt-[80px] px-[16px]">
                <div className="flex flex-col gap-y-[40px] z-10">
                    <div className="flex flex-col gap-y-[30px] items-center">
                        <div className="flex flex-col gap-0">
                            <h1 className="text-[30px] lg:text-[48px] font-semi-bold text-white text-center">A Digital Product Studio</h1>
                            <h1 className="text-[30px] lg:text-[48px] font-semi-bold text-white text-center">That Will Work</h1>
                        </div>
                        <div className="rounded-[8px] py-[18px] px-[20px] border-2 border-[#262626] lg:px-[30px]">
                            <h2 className="text-[16px] lg:text-[18px] text-[#98989A] text-center font-normal">
                                For <span className={spanDesign}>startups</span>, <span className={spanDesign}>enterprise leaders</span>, <span className={spanDesign}>media & publishers</span>, and <span className={spanDesign}>social good</span>.
                            </h2>
                        </div>
                    </div>
                    <div className="flex justify-center gap-x-[13px]">
                        <Button2 width={103} height={45} content="Our Works" />
                        <Button width={108} height={45} content="Contact Us" />
                    </div>
                </div>
                <Image src={abstract} alt="abstract" className="absolute bottom-0 h-[300px] lg:h-[500px] w-[360px] sm:w-[630px] md:w-[760px] lg:w-[1024px] xl:w-[1280px]" />
            </div>
        </>
    );
}

export default Hero;