import Belts from "@/components/Belts";
import Students from "@/components/Students";
import Search from "../Search";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import Filter from "../Filter";
import Paginate from "../Pagination";

const Aside = () => {
    const batch1 = {
        placeholder: "Karate Course 22041",
        batches: [
            "Karate Course 22041",
            "Karate Course 22042",
            "Karate Course 22043",
            "Karate Course 22044",
            "Karate Course 22045",
        ],
    };
    const batch2 = {
        placeholder: "Online Courses",
        batches: [
            "Online Courses 22041",
            "Online Courses 22042",
            "Online Courses 22043",
            "Online Courses 22044",
            "Online Courses 22045",
        ],
    };
    return (
        <div>
            <div className="px-2">
                <h2 className="uppercase text-2xl md:text-4xl font-semibold mb-5 sm:text-left text-center">
                    Student
                </h2>
                <div className="mb-10">
                    <Belts />
                </div>
            </div>
            <div className="mt-28 bg-white rounded-2xl p-3 ">
                <div className="flex items-center gap-3 flex-wrap justify-center bg-white rounded-2xl ">
                    <div>
                        <Search />
                    </div>
                    <div className="flex items-center gap-2 border rounded-full px-3 py-1.5">
                        Filter
                        <HiOutlineAdjustmentsHorizontal size={18} />
                    </div>
                    <div>
                        <Filter batch={batch1} />
                    </div>
                    <div>
                        <Filter batch={batch2} />
                    </div>
                </div>
                <div className="mt-5 border rounded-2xl overflow-hidden">
                    <Students />
                </div>
                <div className="flex items-center pt-4 relative flex-wrap justify-center sm:justify-start">
                    <div className=" shrink-0">
                        <p className="flex items-center gap-1 text-sm">
                            <span className="flex">Showing 1-10 Out Of</span>
                            <span>30</span>
                        </p>
                    </div>
                    <div className="sm:absolute w-full">
                        <Paginate />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aside;
