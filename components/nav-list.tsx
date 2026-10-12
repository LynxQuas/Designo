type NavListProps = {
    className?: string;
    navItems: {
        href: string;
        label: string;
    }[];
}

const NavList = ({ className, navItems }: NavListProps) => {
    return (
        <ul className={className}>
            {navItems.map((navItem) => (
                <li className="font-normal cursor-pointer tracking-widest text-sm" key={navItem.href}>
                    {navItem.label.toUpperCase()}
                </li>))}
        </ul>
    )
}

export default NavList
