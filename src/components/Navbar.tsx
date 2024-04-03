"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import profile from "@/assests/karate.jpg";
import { Menu } from "./navbar/Menu";
import { MenuToggle } from "./navbar/MenuToggle";
import useMenuAnimation from "./navbar/MenuAnimation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);
    const [search, setSearch] = useState(false);
    return (
        <div className="flex justify-between items-center w-full flex-wrap">
            <div>
                <Logo />
            </div>
            <div
                className={`hidden lg:block `}
            >
                <Menu className="flex items-center gap-8" />
            </div>
            <div className="flex items-center gap-2 pr-9">
                <div className="flex items-center gap-2">
                    <label
                        className="flex items-center bg-white p-2 rounded-full duration-150"
                        htmlFor="search"
                    >
                        <input
                            className={`bg-transparent placeholder:text-sm outline-none duration-500  ${
                                search ? "w-0" : "sm:w-44 w-32 pl-3"
                            }`}
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search anything here"
                        />
                        <button
                            onClick={() => setSearch(!search)}
                            className="text-black px-0.5"
                        >
                            <IoSearch size={20} />
                        </button>
                    </label>
                    <div className="w-10 rounded-full overflow-hidden">
                        <Image alt="Profile" src={profile} priority />
                    </div>
                </div>
                <div className="lg:hidden block " ref={scope}>
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
