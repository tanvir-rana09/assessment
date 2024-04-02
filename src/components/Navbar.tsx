"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import profile from "@/assests/rashid.png";
import { Menu } from "./navbar/Menu";
import { MenuToggle } from "./navbar/MenuToggle";
import useMenuAnimation from "./navbar/MenuAnimation";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);
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
                <Menu className="flex items-center gap-8" />
            </div>
            <div className="flex items-center gap-4 px-7">
                <button className="text-black p-2 bg-white rounded-full hover:bg-gray-200 duration-150">
                    <IoSearch size={20} />
                </button>
                <div className="w-9 ">
                    <Image alt="Profile" src={profile} priority/>
                </div>
                <div className="md:hidden block " ref={scope}>
                    <div className="z-10">
                        <Menu className="" />
                    </div>
                    <div className="z-[999]">
                        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
