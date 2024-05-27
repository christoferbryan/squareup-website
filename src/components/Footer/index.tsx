import Image from "next/image";
import logo from '../../../public/logo.svg';
import facebook from '../../../public/facebook.svg';
import instagram from '../../../public/instagram.svg';
import twitter from '../../../public/twitter.svg';
import mail from '../../../public/mail.svg';
import phone from '../../../public/phone.svg';
import location from '../../../public/location.svg';

const Footer : React.FC = () => {
    return (
        <>
            <div className="bg-[#191919] z-10 font-DM-sans gap-y-[30px] w-full flex flex-col text-white px-[16px] py-[30px] lg:px-[80px] lg:py-[40px]
            lg:gap-y-[40px]">
               <div className="flex flex-col gap-y-[30px] items-center lg:flex-row lg:justify-between">
                    <div className="lg:w-[120px]">
                        <Image src={logo} alt="logo" width={150} height={15} />
                    </div>
                    <hr className="border-[#262626] border-2 w-[355px] lg:hidden" />
                    <div className="flex flex-col items-center gap-y-[20px] lg:gap-x-[20px] lg:flex-row">
                        <ul className="flex font-medium text-[16px] gap-x-[20px]">
                            <li>Home</li>
                            <li>Services</li>
                            <li>Work</li>
                            <li>Process</li>
                            <li>About</li>
                        </ul>
                        <ul className="flex font-medium text-[16px] gap-x-[20px]">
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center rounded-[8px] w-[355px] border-[#262626] border-2 gap-y-[14px] py-[16px] lg:flex-row lg:gap-x-[20px] lg:py-[10px]
                    lg:pl-[20px] lg:pr-[10px]">
                        <h2 className="text-[16px] font-medium">Stay Connected</h2>
                        <div className="flex justify-center gap-x-[10px] ">
                            <Image src={facebook} alt="facebook" width={52} height={52}/>
                            <Image src={twitter} alt="twitter" width={52} height={52}/>
                            <Image src={instagram} alt="instagram" width={52} height={52}/>
                        </div>
                    </div>
               </div>

                <div className="flex justify-center hidden lg:block">
                    <hr className="border-[#262626] border-2 w-[1280px]" />
                </div>
               

               <div className="flex flex-col gap-y-[20px] items-center lg:flex-row lg:justify-between">
                    <div className="flex flex-col w-[355px] lg:flex-row lg:w-[600px] lg:gap-x-[25px]">
                        <div className="flex py-[20px] gap-x-[10px] justify-center border-b-2 border-[#262626] lg:pt-[0px] lg:pb-[12px] lg:gap-x-[6px] lg:w-[170px]">
                            <Image src={mail} alt="mail" width={24} height={24} className="lg:w-[20px] lg:h-[20px]"/>
                            <h2 className="text-[18px] font-normal lg:text-[16px]">hello@squareup.com</h2>
                        </div>
                        <div className="flex py-[20px] gap-x-[10px] justify-center border-b-2 border-[#262626] lg:pt-[0px] lg:pb-[12px] lg:gap-x-[6px] lg:w-[170px]">
                            <Image src={phone} alt="phone" width={24} height={24} className="lg:w-[20px] lg:h-[20px]" />
                            <h2 className="text-[18px] font-normal lg:text-[16px]">+31 1234-5678</h2>
                        </div>
                        <div className="flex py-[20px] gap-x-[10px] justify-center border-b-2 border-[#262626] lg:pt-[0px] lg:pb-[12px] lg:gap-x-[6px] lg:w-[210px]">
                            <Image src={location} alt="location" width={24} height={24} className="lg:w-[20px] lg:h-[20px]" />
                            <h2 className="text-[18px] font-normal lg:text-[16px]">Amsterdam, The Netherlands</h2>
                        </div>
                    </div>
                    <h2 className="text-[16px] text-[#98989A] lg:text-[14px]">© 2024 SquareUp. All rights reserved.</h2>
               </div>
            </div>
        </>
    );
}

export default Footer;