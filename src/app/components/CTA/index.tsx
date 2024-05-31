import Button from '@/components/Button';
import logo from '../../../../public/logo-2.svg';
import Image from 'next/image';

const Cta : React.FC = () => {
    return (
        <>
            <div className="bg-[#1A1A1A] flex flex-col items-center">
                <div className="bg-zinc-900 text-center flex flex-col justify-center items-center w-[350px] h-[400px] px-[16px] py-[50px] gap-y-[30px]
                border-b border-zinc-600 lg:w-[1280px] lg:h-[480px] lg:gap-y-[40px] lg:px-[250px] lg:py-[100px]">
                    <Image src={logo} alt='logo' width={50} height={50} className='lg:w-[60px] lg:h-[60px]'/>
                    <div className='flex flex-col gap-y-[6px] lg:gap-y-[10px]'>
                        <h2 className="text-white font-semi-bold text-[24px] lg:text-[30px]">Thank You for your Interest in SquareUp.</h2>
                        <p className="text-[#E6E6E6] font-normal text-[14px] lg:text-[16px]">
                            We would love to hear from you and discuss how we can help bring your digital ideas to life. 
                            Here are the different ways you can get in touch with us.
                        </p>
                    </div>
                    <Button height={50} width={127} content='Start Project' />
                </div>
            </div>
        </>
    );
}

export default Cta;