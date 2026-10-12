import Image from "next/image";

import DesignoLogoText from "@/public/assets/shared/desktop/logo-light.png";
import NavList from "./nav-list";
import { navItems } from "@/data/nav-items";

import FacebookIcon from "@/public/assets/shared/desktop/icon-facebook.svg";
import InstagramIcon from "@/public/assets/shared/desktop/icon-instagram.svg";
import PinterestIcon from "@/public/assets/shared/desktop/icon-pinterest.svg";
import TwitterIcon from "@/public/assets/shared/desktop/icon-twitter.svg";
import YoutubeIcon from "@/public/assets/shared/desktop/icon-youtube.svg";

const Footer = () => {
    return (
        <footer className="bg-black -mt-25 py-36 lg:px-41.25 md:px-10 px-6">
            <div className="flex flex-col items-center justify-between gap-y-16.25 md:flex-row">
                <Image
                    src={DesignoLogoText}
                    loading="lazy"
                    width={157}
                    height={27}
                    alt="Designo logo"
                    className="w-auto h-auto"
                />

                <NavList
                    navItems={navItems}
                    className="flex flex-col items-center gap-8 text-white md:flex-row"
                />
            </div>

            <div className="mt-18 flex flex-col md:flex-row items-center gap-y-10 justify-between">
                <div className="grid gap-x-24 grid-cols-1 gap-y-8 text-white/50 md:grid-cols-2">
                    <div>
                        <p>Designo Central Office</p>
                        <p>
                            3886 Wellington Street
                            <br />
                            Toronto, Ontario M9C 3J5
                        </p>
                    </div>

                    <div>
                        <p>Contact Us (Central Office)</p>
                        <p>P: +1 253-863-8967</p>
                        <p>M: contact@designo.co</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Image src={FacebookIcon} className="w-auto h-auto"  width={24} height={24} alt="Facebook" />
                    <Image src={YoutubeIcon} width={24} className="w-auto h-auto" height={24} alt="YouTube" />
                    <Image src={TwitterIcon} width={24} height={20} alt="Twitter" className="w-auto h-auto" />
                    <Image src={PinterestIcon} width={24} height={24} alt="Pinterest" className="w-auto h-auto"/>
                    <Image src={InstagramIcon} width={24} height={24}  alt="Instagram" className="w-auto h-auto"/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
