import React from "react";
import Logo from "./Logo";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import profile from "@/assests/rashid.png";

const Navbar = () => {
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
        <div className="flex justify-between items-center w-full flex-wrap">
            <div>
                <Logo />
            </div>
            <div className="hidden md:block">
                <ul className="flex items-center gap-10 text-white">
                    {navitems.map((item, i) => (
                        <li className="text-white uppercase text-sm" key={i}>
							<a href="#">{item.name}</a>
						</li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center gap-5 ">
                <button className="text-white p-2 bg-gray-950/20 rounded-full hover:bg-gray-950/50 duration-150">
                    <IoSearch />
                </button>
                <div className="w-9">
                    <Image alt="Profile" src={profile} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
