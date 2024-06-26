"use client";
import Profile from "./Profile";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { sidebarElements } from "@/data/sidebarElements"; // import sidebar elements data
import SidebarElement from "./SidebarElement";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar(!sidebar);
        console.log(sidebar);
    };
    
    return (
        <div className=" relative ">
            <button
                onClick={toggleSidebar}
                className="block lg:hidden fixed -left-2 top-20 bg-white px-6 py-2 shadow-md rounded-r-full cursor-pointer z-[200]"
            >
                {sidebar ? <RxCross2 size={20} /> : <HiMiniBars3BottomLeft size={20} />}
            </button>
            <div
                className={`w-[20rem] absolute lg:static duration-700 ease-in-out z-[100]  ${
                    sidebar
                        ? " -left-1.5 -top-1.5 opacity-100 "
                        : " -left-[25rem] top-0 opacity-0 lg:opacity-100 "
                }`}
            >
                <div className={`bg-white flex flex-col items-center  shadow-sm py-10 ${sidebar?" h-screen lg:rounded-2xl":" rounded-2xl"}`}>
                    <div>
                        <Profile />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        {sidebarElements.map((element, i) => (
                            <SidebarElement
                                key={i}
                                slug={element.slug}
                                icon={element.icon}
                                name={element.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
