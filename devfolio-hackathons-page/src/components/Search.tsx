import { FaChevronRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="flex gap-4">
      <div className="flex gap-2 bg-white p-3 items-center rounded-xl">
        <div className="flex items-center gap-2 bg-gray-100 px-2">
          <CiSearch />
          <input
            type="text"
            placeholder="Type to begin search, or use the global shortcut"
            className="bg-gray-100 p-4"
          ></input>
        </div>
        <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-md">
          <div className="bg-[#e4eaeb] px-4 py-2 border-2 border-[#8e989c] rounded-md">
            Ctrl
          </div>
          <div className="text-gray-500">+</div>
          <div className="bg-[#e4eaeb] px-4 py-2 border-2 border-[#8e989c] rounded-md">
            K
          </div>
        </div>
      </div>
      <div className="flex bg-[#d2e0ff] items-center gap-2 p-4 rounded-lg border-2 border-[#b3ceff] hover:border-[#3770ff]">
        <div className="text-[#3770ff]">Your hackathons</div>
        <FaChevronRight className="text-[#3770ff]" />
      </div>
    </div>
  );
};

export default Search;
