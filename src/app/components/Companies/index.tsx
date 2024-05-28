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
            <div className="h-[320px] bg-[#1A1A1A] flex justify-center relative">
                <div className="bg-[#262626] w-[350px] flex flex-col items-center border border-zinc-600">
                    <div className="bg-[#1A1A1A] absolute rounded-[100px] top-[-30px] text-white border border-zinc-600 px-[24px] py-[14px]">
                        <h2 className="font-medium text-[14px]">Trusted By 250+ Companies</h2>
                    </div>
                    <div className="flex w-[350px] justify-center gap-x-[30px] border-b border-zinc-600">
                        <Card logo={zapier} />
                        <Card logo={spotify} />
                    </div>
                    <div className="flex w-[350px] justify-center gap-x-[30px] border-b border-zinc-600">
                        <Card logo={zoom} />
                        <Card logo={slack} />
                    </div>
                    <div className="flex w-[350px] justify-center gap-x-[30px] border-zinc-600">
                        <Card logo={amazon} />
                        <Card logo={adobe} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Companies;