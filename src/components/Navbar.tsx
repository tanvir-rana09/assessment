"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Image from "next/image";
import profile from "@/assests/karate.jpg";
import { Menu } from "./navbar/Menu";
import { MenuToggle } from "./navbar/MenuToggle";
import useMenuAnimation from "./navbar/MenuAnimation";
import Search from "./Search";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);

    return (
        <div className="flex justify-between items-center w-full flex-wrap">
            <div>
                <Logo />
            </div>
            <div className={`hidden lg:block `}>
                <Menu className="flex items-center gap-8" />
            </div>
            <div className="flex items-center gap-2 pr-9">
                <div className="flex items-center gap-2">
                    <Search className="" />
                    <div className="w-10 rounded-full overflow-hidden">
                        <Image
                            alt="Profile"
                            src={profile}
                            priority
                            placeholder="blur"
                        />
                    </div>
                </div>
                <div className="lg:hidden block " ref={scope}>
                {/* framer motion animating navbar for sm screen  */}
                    <div className="">
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
