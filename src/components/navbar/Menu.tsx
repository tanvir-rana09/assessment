import Link from "next/link";

export function Menu({ className }: { className: string }) {
    type navitem = {
        name: string;
    };
    const navitems: navitem[] = [
        {
            name: "Home",
        },
        {
            name: "About",
        },
        {
            name: "Courses",
        },
        {
            name: "Events",
        },
        {
            name: "Contact",
        },
    ];
    return (
        <nav className={` ${className ? "" : "menu"}`}>
            <ul className={` ${className ? className : "animationMenuItems"}`}>
                {navitems.map((nav, i) => (
                    <li className={` ${className?"text-white":"animationMenuItem font-caveat"}`} key={i}>
                        <Link className="" href="#">
                            {nav.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
