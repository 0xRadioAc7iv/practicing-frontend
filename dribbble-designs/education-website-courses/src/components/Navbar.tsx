import { IoNotificationsOutline } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
import profile from "../assets/profile.png";

const Navbar = () => {
  return (
    <div className="flex justify-between px-7 pt-4">
      <div className="font-kodchasan">
        <span className="text-xs text-gray-500 font-semibold">Welcome to </span>
        <span className="text-xl text-[#ff5734] font-bold">Learn</span>
        <span className="text-xl text-[#151313] font-bold">ify</span>
      </div>
      <div className="flex gap-8 font-kodchasan items-center">
        <div className="flex w-60 justify-between items-center border border-black pl-2 p-1 rounded-xl bg-white">
          <div className="text-xs text-gray-500 font-semibold">Search</div>
          <div className="text-white bg-[#ff5734] p-0.5 rounded-lg border border-black">
            <RiSearch2Line size={20} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative bg-white p-1.5 border border-black rounded-full">
            <IoNotificationsOutline size={22} />
            <div className="absolute top-[8px] right-[9px] bg-[#ff5734] w-1.5 h-1.5 rounded-full"></div>
          </div>
          <div className="flex items-center gap-1">
            <div>
              <img
                src={profile}
                className="rounded-full border border-black"
                width={36}
              />
            </div>
            <div className="flex flex-col">
              <div className="text-sm font-bold ">Manav Gadhiya</div>
              <div className="text-xs font-semibold text-gray-500">
                @radioac7iv
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
