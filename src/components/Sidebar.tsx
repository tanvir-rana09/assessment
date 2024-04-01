import Profile from "./Profile";
// import Education from "@/assests/icons/Education.png";
// import Graduate from "@/assests/icons/Graduate.png";
// import Students from "@/assests/icons/Group-1.png";
// import Attendences from "@/assests/icons/Group-2.png";
// import Exam from "@/assests/icons/Exam.png";
// import Notification from "@/assests/icons/Group.png";
// import User from "@/assests/icons/User.png";
// import Setting from "@/assests/icons/Gear.png";
// import SignOut from "@/assests/icons/Frame.png";
import { FaGraduationCap } from "react-icons/fa6";
import { FaLaptopHouse } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaUserCheck } from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";
import { MdNotificationsActive } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";
import SidebarElement from "./SidebarElement";
import { ReactNode } from "react";

const Sidebar = () => {
    type element = {
        name: string;
        icon: ReactNode;
        slug:string
    };
    const sidebarElements: element[] = [
        {
            name: "Karate Course",
            icon: <FaGraduationCap/>,
            slug:"karate-course"
        },
        {
            name: "Online karate courses",
            icon: <FaLaptopHouse/>,
            slug:"online-karate-course"
        },
        {
            name: "students",
            icon: <HiMiniUserGroup/>,
            slug:"/"
        },
        {
            name: "attendences",
            icon: <FaUserCheck/>,
            slug:"attendences"
        },
        {
            name: "exam & grading",
            icon: <PiExamFill/>,
            slug:"exam&grading"
        },
        {
            name: "notification",
            icon: <MdNotificationsActive/>,
            slug:"notification"
        },
        {
            name: "my profile",
            icon: <FaCircleUser/>,
            slug:"profile"
        },
        {
            name: "setting",
            icon: <IoSettingsSharp/>,
            slug:"setting"
        },
        {
            name: "sign out",
            icon: <CgLogOut/>,
            slug:"signout"
        },
    ];
    return (
        <div className="bg-white w-full flex flex-col items-center justify-center rounded-2xl shadow-sm">
            <div>
                <Profile />
            </div>
            <div className="flex flex-col gap-1 w-full">
                {sidebarElements.map((element, i) => (
                    <SidebarElement key={i} slug={element.slug} icon={element.icon} name={element.name}/>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
