import Image from "next/image";
import logo from '../../../public/logo.svg';
import sidebar from '../../../public/sidebar.svg';
import Button from "../Button";

const Header : React.FC = () => {
    return (
        <>
            <div className="w-full font-DM-sans font-medium bg-[#191919]">
                <nav className="grid grid-cols-2 pt-[40px] px-4 h-[110px] lg:h-[85px] lg:py-[20px] lg:grid-cols-3 lg:px-[80px]">
                    <div>
                        <Image src={logo} width={120} height={40} alt="logo" />        
                    </div>
                    <ul className="gap-[24px] text-[14px] pt-3 text-white hidden lg:flex">
                        <li>Home</li>
                        <li>Services</li>
                        <li>Work</li>
                        <li>Process</li>
                        <li>About</li>
                        <li>Careers</li>
                    </ul>
                    <div className="justify-self-end hidden lg:block">
                        <Button width={110} height={45} content="Contact Us" />
                    </div>
                    <div className="justify-self-end lg:hidden">
                        <Image src={sidebar} alt="sidebar-buton" width={46} height={46} />
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;