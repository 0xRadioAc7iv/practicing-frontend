import HackathonCard from "./HackathonCard";
import Search from "./Search";

const Main = () => {
  return (
    <div className="flex flex-col justify-center bg-gray-100 p-6">
      <Search />
      <HackathonCard />
    </div>
  );
};

export default Main;
