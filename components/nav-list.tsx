import Link from "next/link";

type NavListProps = {
    className?: string;
    navItems: {
        href: string;
        label: string;
    }[];
};

const NavList = ({ className, navItems }: NavListProps) => {
    return (
        <ul className={className}>
            {navItems.map((navItem) => (
                <li
                    className="font-normal tracking-widest text-sm"
                    key={navItem.href}
                >
                    <Link href={navItem.href} className="cursor-pointer">
                        {navItem.label.toUpperCase()}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavList;
