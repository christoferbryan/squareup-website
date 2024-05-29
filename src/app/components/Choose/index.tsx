import expertise from '../../../../public/expertise.svg';
import client from '../../../../public/client.svg';
import results from '../../../../public/results.svg';
import collab from '../../../../public/collab.svg';
import ChooseCard from './Card';

const Choose : React.FC = () => {
 return (
    <>
        <div className="bg-[#1A1A1A] flex flex-col items-center">
            <div className="bg-zinc-900 text-center flex flex-col justify-center items-center w-[350px] h-[190px] px-[16px] py-[50px] gap-y-[6px]
            border-b border-zinc-600 lg:w-[1280px] lg:h-[280px] lg:gap-y-[10px] lg:px-[250px] lg:py-[100px]">
                <h2 className="text-white font-semi-bold text-[26px] lg:text-[38px]">Why Choose SquareUp?</h2>
                <p className="text-white font-normal text-[14px] lg:text-[16px]">
                    Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.
                </p>
            </div>
            <div className='flex flex-col lg:grid lg:grid-cols-2'>
               <ChooseCard icon={expertise} title='Expertise' desc='Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.'
               />
               <ChooseCard icon={client} title='Client-Centric Approach' desc='We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.' 
               />
               <ChooseCard icon={results} title='Results-Driven Solutions' desc='Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.' 
               />
               <ChooseCard icon={collab} title='Collaborative Partnership' desc='We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.' 
               />
            </div>
        </div>
    </>
 );
}

export default Choose;