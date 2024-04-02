import { IoSearch } from "react-icons/io5";

const Search = () => {
    return (
        <label
            className="flex items-center bg-grayx/50 px-5 py-2 rounded-full"
            htmlFor="search"
        >
            <input
                className=" bg-transparent placeholder:text-sm outline-none"
                type="text"
                name="search"
                id="search"
                placeholder="Search anything here"
            />
            <button>
                <IoSearch size={19} />
            </button>
        </label>
    );
};

export default Search;
