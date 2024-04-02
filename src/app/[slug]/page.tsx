import Sidebar from "@/components/Sidebar";
import Aside from "@/components/aside/Aside";

const page = () => {
    return (
        // When we have sidebar element data, we replace the existing data with that data.
        <div className="bg-whitex h-screen flex xl:px-[5%] w-full lg:gap-5 2xl:px-[10%] 3xl:px-[15%] lg:p-5 p-2">
            <div className="">
                <Sidebar />
            </div>
            <div className="w-full">
                <Aside />
            </div>
        </div>
    );
};

export default page;
