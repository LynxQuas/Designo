import { MenuIcon } from "lucide-react";
import Image from "next/image";
import NavList from "./nav-list";
import { navItems } from "@/data/nav-items";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4.5">
                <Image src="/oval-logo.svg" loading="eager" width={24} height={24} alt="logo" />
                <Image src="/designo-text.svg" loading="eager" className="w-auto h-auto" width={152} height={20} alt="logo text" />
            </Link>

            <NavList className="md:flex gap-10.5 items-center hidden" navItems={navItems}/>

            <MenuIcon className="block md:hidden cursor-pointer"/>
        </nav>
    )
}

export default Navbar;
