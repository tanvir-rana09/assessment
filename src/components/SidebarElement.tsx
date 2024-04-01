import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface propType {
    icon: ReactNode;
    name: string;
    slug:string
}
const SidebarElement = ({ icon, name,slug }: propType) => {
    return (
        <Link href={`/${slug}`} className="flex items-center bg-grayx gap-5 p-4 w-full hover:bg-bluex hover:text-white duration-300 cursor-pointer">
            <div className="text-xl">
                <span>{icon}</span>
            </div>
            <p className=" capitalize">{name}</p>
        </Link>
    );
};

export default SidebarElement;
