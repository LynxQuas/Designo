"use client";

import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import NavList from "./nav-list";
import { navItems } from "@/data/nav-items";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav className="flex items-center justify-between relative">
                <Link href="/" className="flex items-center gap-4.5">
                    <Image src="/oval-logo.svg" loading="eager" width={24} height={24} alt="logo" />
                    <Image src="/designo-text.svg" loading="eager" className="w-auto h-auto" width={152} height={20} alt="logo text" />
                </Link>

                <NavList className="md:flex gap-10.5 items-center hidden" navItems={navItems} />

                {
                    isMenuOpen ?
                        <X onClick={() => setIsMenuOpen(false)} className="block md:hidden cursor-pointer" />
                        : <MenuIcon onClick={() => setIsMenuOpen(true)} className="block md:hidden cursor-pointer" />
                }


                {isMenuOpen && (
                    <div className="fixed inset-x-0 bottom-0 top-22.5 z-40 bg-black/50 md:hidden">
                        <nav className="flex flex-col gap-y-6 bg-black px-6 py-12 text-white">
                            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                                OUR COMPANY
                            </Link>
                            <Link href="/locations" onClick={() => setIsMenuOpen(false)}>
                                LOCATIONS
                            </Link>
                            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                                CONTACT
                            </Link>
                        </nav>
                    </div>
                )}
            </nav>

        </>
    )
}

export default Navbar;
