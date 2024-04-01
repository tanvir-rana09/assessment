import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="bg-blue px-5 py-2">
            <div>
                <Navbar />
            </div>
            <div>
                <h2 className="text-3xl uppercase font-semibold flex justify-center items-center text-yellow ">Teachers Profile</h2>
            </div>
        </div>
    );
};

export default Header;
