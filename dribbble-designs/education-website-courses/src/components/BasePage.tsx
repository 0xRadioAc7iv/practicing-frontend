import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const BasePage = ({ children }: Props) => {
  return (
    <div>
      <div className="flex min-h-screen gap-4 p-3.5">
        <Sidebar />
        <div className="bg-[#f7f7f5] w-full rounded-3xl">
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default BasePage;
