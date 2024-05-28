import Card from "./Card";
import zapier from '../../../../public/zapier.png';
import spotify from '../../../../public/spotify.png';
import zoom from '../../../../public/zoom.png';
import adobe from '../../../../public/adobe.png';
import slack from '../../../../public/slack.png';
import amazon from '../../../../public/amazon.png';

const Companies : React.FC = () => {
    return (
        <>
            <div className="bg-[#1A1A1A] flex justify-center">
                <div className="bg-[#262626] relative w-[350px] flex flex-col items-center justify-center border border-zinc-600 lg:w-[1280px] lg:flex-row lg:gap-x-[20px]">
                    <div className="bg-[#1A1A1A] flex justify-center absolute rounded-[100px] top-[-35px] text-white border border-zinc-600 px-[24px] py-[14px]">
                        <h2 className="font-medium text-[14px]">Trusted By 250+ Companies</h2>
                    </div>
                    <div className="flex w-[350px] justify-center gap-x-[30px] border-b border-zinc-600 lg:border-0">
                        <Card logo={zapier} />
                        <Card logo={spotify} />
                    </div>
                    <div className="flex w-[350px] justify-center gap-x-[30px] border-b border-zinc-600 lg:border-0">
                        <Card logo={zoom} />
                        <Card logo={slack} />
                    </div>
                    <div className="flex w-[350px] justify-center gap-x-[30px]">
                        <Card logo={amazon} />
                        <Card logo={adobe} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Companies;