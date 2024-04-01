import Belts from "@/components/Belts";
import Students from "@/components/Students";

export default function Home() {
    
    return (
        <main className="bg-whitex ">
            <h2 className="uppercase text-4xl font-semibold">Student</h2>
            <div>
                <Belts/>
            </div>
            <div className="mt-20">
                <Students/>
            </div>
        </main>
    );
}
