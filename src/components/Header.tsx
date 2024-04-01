import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="w-full bg-bluex px-5 py-3">
            <div>
                <Navbar />
            </div>
            <div>
                <h2 className="text-4xl uppercase font-semibold flex justify-center items-center text-yellowx mt-5">Teachers Profile</h2>
            </div>
        </div>
    );
};

export default Header;
