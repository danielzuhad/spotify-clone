import { Dispatch, SetStateAction } from "react";
import { IoIosSearch } from "react-icons/io";

type SearchBarProps = {
  setSearch: Dispatch<SetStateAction<string>>;
};

const SearchBar = ({ setSearch }: SearchBarProps) => {
  return (
    <>
      <div className="glass flex w-full items-center  gap-2 rounded-md p-2">
        <input
          type="text"
          className="w-full bg-[#ffffff00] py-[2px] text-sm shadow-none focus:border-0 focus:outline-none "
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />

        <IoIosSearch size={25} color="#b1b1b1" />
      </div>
    </>
  );
};

export default SearchBar;
