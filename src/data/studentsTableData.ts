import profile1 from "./profile/profile (1).jpg"
import profile2 from "./profile/profile (2).jpg"
import profile3 from "./profile/profile (3).jpg"
import profile4 from "./profile/profile (4).jpg"
import profile5 from "./profile/profile (5).jpg"
import profile6 from "./profile/profile (6).jpg"
import profile7 from "./profile/profile (11).jpg"
import profile8 from "./profile/profile (8).jpg"
import profile9 from "./profile/profile (9).jpg"
import profile10 from "./profile/profile (10).jpg"
import belt from "./profile/belt.png"
import { StaticImageData } from "next/image"

type student = {
    id: number;
    profile:StaticImageData;
    belt: StaticImageData;
    roll: string;
    name: string;
    batch: string;
    presence: number;
    result: string;
};
export const students:student[] = [
   
    {
        id: 1,
        profile: profile1,
        belt: belt,
        roll: "KC1122334",
        name: "Tanvir Rana",
        batch: "Karate Course 22010",
        presence: 0,
        result: "80(pass)",
    },
    {
        id: 2,
        profile: profile2,
        belt: belt,
        roll: "KC1122335",
        name: "Sadia Akter",
        batch: "Karate Course 22010",
        presence: 0,
        result: "70(pass)",
    },
    {
        id: 3,
        profile: profile3,
        belt: belt,
        roll: "KC1122336",
        name: "Julekha Julie",
        batch: "Karate Course 22010",
        presence: 0,
        result: "--/--",
    },
    {
        id: 4,
        profile: profile4,
        belt: belt,
        roll: "KC1122534",
        name: "Shadat Alom",
        batch: "Karate Course 22010",
        presence: 0,
        result: "--/--",
    },
    {
        id: 5,
        profile: profile5,
        belt: belt,
        roll: "KC1122354",
        name: "Soikat Khan",
        batch: "Karate Course 22010",
        presence: 0,
        result: "80(pass)",
    },
    {
        id: 6,
        profile: profile6,
        belt: belt,
        roll: "KC1122344",
        name: "Abu Bakkar",
        batch: "Karate Course 22010",
        presence: 0,
        result: "--/--",
    },
    {
        id: 7,
        profile: profile7,
        belt: belt,
        roll: "KC1122314",
        name: "Dinar Ali",
        batch: "Karate Course 22010",
        presence: 0,
        result: "--/--",
    },
    {
        id: 8,
        profile: profile8,
        belt: belt,
        roll: "KC1122394",
        name: "Ruku Khatun",
        batch: "Karate Course 22010",
        presence: 0,
        result: "--/--",
    },
    {
        id: 9,
        profile: profile9,
        belt: belt,
        roll: "KC1122374",
        name: "Sabbir Ahamad",
        batch: "Karate Course 22010",
        presence: 0,
        result: "--/--",
    },
    {
        id: 10,
        profile: profile10,
        belt: belt,
        roll: "KC1122384",
        name: "Nasim Ali",
        batch: "Karate Course 22010",
        presence: 0,
        result: "--/--",
    },
   
];
