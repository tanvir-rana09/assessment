"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface propType {
    icon: ReactNode;
    name: string;
    slug: string;
}
const SidebarElement = ({ icon, name, slug }: propType) => {
    const pathname = usePathname();
    return (
        <Link
            href={`${slug}`}
            className={`flex items-center gap-5 p-4 w-full duration-300 cursor-pointer ${
                pathname == slug ? "bg-bluex text-white" : "hover:bg-bluex hover:text-white bg-grayx"
            }`}
        >
            <div className="text-xl">
                <span>{icon}</span>
            </div>
            <p className=" capitalize">{name}</p>
        </Link>
    );
};

export default SidebarElement;
