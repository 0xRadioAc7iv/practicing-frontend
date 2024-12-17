import { IconType } from "react-icons";

type Props = {
  Icon: IconType;
  size: number | undefined;
  active?: boolean;
};

const SidebarIcon = (props: Props) => {
  const { Icon, size, active } = props;

  if (active) {
    return (
      <div className="p-3 bg-[#fccc42] text-black rounded-xl">
        <Icon size={size} />
      </div>
    );
  }

  return (
    <div className="p-3">
      <Icon size={size} />
    </div>
  );
};

export default SidebarIcon;
