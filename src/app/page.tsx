import Sidebar from "@/components/Sidebar";
import Aside from "@/components/aside/Aside";

export default function Home() {
    return (
        <div className="bg-whitex h-screen flex xl:px-[5%] w-full lg:gap-5 2xl:px-[10%] 3xl:px-[15%] lg:p-5 p-2">
            <div className="">
                <Sidebar />
            </div>
            <div className="w-full">
                <Aside />
            </div>
        </div>
    );
}
