import Image from "next/image";

import DesignoLogoText from "@/public/assets/shared/desktop/logo-light.png";
import NavList from "./nav-list";
import { navItems } from "@/data/nav-items";
import Link from "next/link";
import { extranalLinks } from "@/data/footer";

const Footer = () => {
    return (
        <footer className="bg-black -mt-25 py-36 lg:px-41.25 md:px-10 px-6">
            <div className="flex flex-col items-center justify-between gap-y-16.25 md:flex-row">
                <Link href="/">
                    <Image
                        src={DesignoLogoText}
                        alt="Designo logo"
                        width={157}
                        height={25}
                        className="aspect-157/25"
                    />
                </Link>

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
                    {extranalLinks.map((link) => (
                        <Link key={link.href} target="_blank" rel="noopener noreferrer" href={link.href}>
                            <Image className="aspect-24/24" src={link.svg} alt={link.alt} />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
