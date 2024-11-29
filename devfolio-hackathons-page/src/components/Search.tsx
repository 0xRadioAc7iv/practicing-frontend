import { FaChevronRight } from "react-icons/fa";

const Search = () => {
  return (
    <div className="w-full flex justify-center items-center gap-4">
      <div className="w-full flex items-center gap-4 bg-white p-4 rounded-2xl shadow-md">
        <div className="w-full flex items-center gap-2 bg-[#f5f7f7] p-4 text-[#8e989c] font-nunito font-semibold text-lg border-[1px] border-[#d0d9da] rounded-lg hover:border-[#3770ff]  transition-colors ease-in duration-150">
          <div>
            <img
              src="/search.svg"
              width="24"
              height="24"
              className="opacity-25"
            />
          </div>
          <div>Type to begin search, or use the global shortcut</div>
        </div>
        <div className="flex items-center gap-1 p-1 bg-[#f5f7f7]">
          <div className="bg-[#e4eaeb] text-[#273339] text-xl font-spacemono px-4 py-2 font-bold border-[1px] border-[#8e989c] rounded-md">
            Ctrl
          </div>
          <div className="text-[#b4bec0] font-nunito font-bold">+</div>
          <div className="bg-[#e4eaeb] text-[#273339] text-xl font-spacemono px-4 py-2 font-bold border-[1px] border-[#8e989c] rounded-md">
            K
          </div>
        </div>
      </div>
      <div className="flex items-center text-[#3770ff] gap-2 bg-[#d2e0ff] border-2 border-[#b3ceff] hover:border-[#8097f2] rounded-xl p-8">
        <div className="font-nunito font-bold text-xl whitespace-nowrap">
          Your hackathons
        </div>
        <FaChevronRight />
      </div>
    </div>
  );
};

export default Search;
