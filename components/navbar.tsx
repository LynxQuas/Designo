import { MenuIcon } from "lucide-react";
import Image from "next/image";

const navItems = [
    { label: "our company", href: "#our-company" },
    { label: "locations", href: "#locations" },
    { label: "contact", href: "#contact" }
]

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between">
            <div className="flex items-center gap-4.5">

                <Image src="/oval-logo.svg" loading="eager" width={24} height={24} alt="logo" />
                <Image src="/designo-text.svg" loading="eager" className="w-auto h-auto" width={152} height={20} alt="logo text" />
            </div>
            <ul className="md:flex gap-10.5 items-center hidden">
                {navItems.map((navItem) => (
                    <li className="font-normal cursor-pointer tracking-widest text-sm" key={navItem.href}>
                        {navItem.label.toUpperCase()}
                    </li>))}
            </ul>

            <MenuIcon className="block md:hidden cursor-pointer"/>
        </nav>
    )
}

export default Navbar;
