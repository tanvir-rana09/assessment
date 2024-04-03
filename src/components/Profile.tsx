import Image from "next/image";
import profile from "@/assests/karate.jpg";

const Profile = () => {
    return (
        <div >
            <div className="w-44 mt-8 outline-8 outline-gray-300 outline border-gray-200 rounded-full ring-8 border-spacing-96 border-8 overflow-hidden">
                <Image alt="Profile" src={profile} priority placeholder="blur"/>
            </div>
			<div className="flex flex-col items-center py-5">
				<p className="text-3xl font-semibold">Adil Rashid</p>
				<p className="text-gray-500">Sr. Kareta Teacher</p>
			</div>
        </div>
    );
};

export default Profile;
