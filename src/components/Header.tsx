import Navbar from "./Navbar";
const Header = () => {
    return (
        <div className="w-full bg-bluex px-5 py-3 xl:px-[5%] 2xl:px-[10%] 3xl:px-[15%]">
            <div>
                <Navbar />
            </div>
            <div>
                <h2 className="xl:text-4xl text-xl md:text-2xl lg:text-3xl uppercase font-semibold flex justify-center items-center text-yellowx mt-5">Teachers Profile</h2>
            </div>
        </div>
    );
};

export default Header;
