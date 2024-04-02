import { FaGraduationCap } from "react-icons/fa6";
import { FaLaptopHouse } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaUserCheck } from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";
import { MdNotificationsActive } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";
import { ReactNode } from "react";

type element = {
	name: string;
	icon: ReactNode;
	slug: string;
};
export const sidebarElements: element[] = [
	{
		name: "Karate Course",
		icon: <FaGraduationCap />,
		slug: "/karate-course",
	},
	{
		name: "Online karate courses",
		icon: <FaLaptopHouse />,
		slug: "/online-karate-course",
	},
	{
		name: "students",
		icon: <HiMiniUserGroup />,
		slug: "/",
	},
	{
		name: "attendences",
		icon: <FaUserCheck />,
		slug: "/attendences",
	},
	{
		name: "exam & grading",
		icon: <PiExamFill />,
		slug: "/exam&grading",
	},
	{
		name: "notification",
		icon: <MdNotificationsActive />,
		slug: "/notification",
	},
	{
		name: "my profile",
		icon: <FaCircleUser />,
		slug: "/profile",
	},
	{
		name: "setting",
		icon: <IoSettingsSharp />,
		slug: "/setting",
	},
	{
		name: "sign out",
		icon: <CgLogOut />,
		slug: "/signout",
	},
];