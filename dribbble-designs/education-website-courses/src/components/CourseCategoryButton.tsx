import { useState } from "react";
import { cn } from "../lib/utils";

type Props = {
  text: string;
  active?: boolean;
};

const CourseCategoryButton = ({ text, active }: Props) => {
  const [isActive, setActive] = useState(active);

  const toggleActiveState = () => {
    setActive(!isActive);
  };

  return (
    <div
      onClick={toggleActiveState}
      className={cn(
        "border border-black text-sm font-semibold px-3 py-1 rounded-lg cursor-pointer",
        isActive ? "bg-black text-white" : "bg-white text-black"
      )}
    >
      {text}
    </div>
  );
};

export default CourseCategoryButton;
