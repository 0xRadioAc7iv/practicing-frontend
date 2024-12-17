import { GrAppsRounded } from "react-icons/gr";
import { FaRegFolder } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoBookmarksOutline } from "react-icons/io5";
import { PiHeadphonesBold } from "react-icons/pi";
import { LuSettings } from "react-icons/lu";
import { RiLogoutCircleRLine } from "react-icons/ri";
import SidebarIcon from "./SidebarIcon";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between text-white pt-14">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-1">
          <SidebarIcon Icon={GrAppsRounded} size={22} />
          <SidebarIcon Icon={FaRegFolder} size={22} active={true} />
          <SidebarIcon Icon={FiEdit} size={22} />
          <SidebarIcon Icon={MdOutlineMarkEmailUnread} size={22} />
          <SidebarIcon Icon={GrAppsRounded} size={22} />
          <SidebarIcon Icon={IoBookmarksOutline} size={22} />
        </div>
        <div>
          <SidebarIcon Icon={PiHeadphonesBold} size={22} />
          <SidebarIcon Icon={LuSettings} size={22} />
        </div>
      </div>
      <div>
        <SidebarIcon Icon={RiLogoutCircleRLine} size={22} />
      </div>
    </div>
  );
};

export default Sidebar;
