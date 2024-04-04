"use client";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Search = ({ className }: { className: string }) => {
    const [search, setSearch] = useState(true);
    return (
        <label
            className={`flex items-center bg-white p-2 rounded-full duration-150 ${
                className && className
            }`}
            htmlFor="search"
        >
            <input
                className={`bg-transparent placeholder:text-sm outline-none duration-500 ${
                    !className && search ? "w-0" : "sm:w-44 w-32 pl-3"
                }`}
                type="text"
                name="search"
                id="search"
                placeholder="Search anything here"
            />
            {!className && (
               // this is for the navbar component
                <button
                    onClick={() => setSearch(!search)}
                    className="text-black px-0.5"
                >
                    <IoSearch size={20} />
                </button>
            )}
            {className && (
                // this is for table
                <button className="text-black px-0.5">
                    <IoSearch size={20} /> 
                </button>
            )}
        </label>
    );
};

export default Search;
