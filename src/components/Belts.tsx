import belt1 from "@/assests/Group 160.png";
import belt2 from "@/assests/Group 161.png";
import belt3 from "@/assests/Group 162.png";
import belt4 from "@/assests/Group 163.png";
import belt5 from "@/assests/Group 164.png";
import belt6 from "@/assests/Group 165.png";
import belt7 from "@/assests/Group 166.png";
import belt8 from "@/assests/Group 167.png";
import belt9 from "@/assests/Group 168.png";
import belt10 from "@/assests/Group 169.png";
import Image from "next/image";

const Belts = () => {
    const belts = [
        belt1,
        belt2,
        belt3,
        belt4,
        belt5,
        belt6,
        belt7,
        belt8,
        belt9,
        belt10,
    ];
    return (
        <div className="relative w-full">
            <hr className="border-2 w-full border-grayx absolute left-0 top-3 sm:top-6" />
            <div className="flex justify-between absolute top-0 left-0 w-full">
                {belts.map((belt, i) => (
                    <div className="z-10 bg-grayx rounded-full p-1" key={i}>
                        <Image
                            className="sm:w-10 w-5 overflow-hidden rounded-full"
                            alt="karate belt"
                            src={belt}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Belts;
