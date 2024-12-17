import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex min-h-screen gap-4 p-3.5">
      <Sidebar />
      <div className="bg-[#f7f7f5] w-full rounded-3xl">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
