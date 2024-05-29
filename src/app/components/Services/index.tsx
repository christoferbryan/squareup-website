import design from '../../../../public/design.svg';
import ServicesCard from './Card';
import engineering from '../../../../public/engineering.svg';
import pm from '../../../../public/productMagement.svg';

const OurServices : React.FC = () => {
    return (
        <>
            <div className="bg-[#1A1A1A] flex flex-col items-center">
                <div className="bg-zinc-900 text-center flex flex-col justify-center items-center w-[350px] h-[190px] px-[16px] py-[50px] gap-y-[6px]
                border-b border-zinc-600 lg:w-[1280px] lg:h-[280px] lg:gap-y-[10px] lg:px-[250px] lg:py-[100px]">
                    <h2 className="text-white font-semi-bold text-[28px] lg:text-[38px]">Our Services</h2>
                    <p className="text-white font-normal text-[14px] lg:text-[16px]">
                        Transform your brand with our innovative digital solutions that captivate and engage your audience.
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row'>
                    <ServicesCard icon={design} title='Design' 
                    desc='At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; its about creating seamless and intuitive user experiences.' 
                    />
                    <ServicesCard icon={engineering} title='Engineering' 
                    desc='Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.' 
                    />
                    <ServicesCard icon={pm} title='Project Management' 
                    desc='Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.' 
                    />
                </div>
            </div>
        </>
    );
}

export default OurServices;