const Navbar = () => {
  return (
    <div className="flex justify-center p-4 bg-white">
      <div className="flex max-w-min bg-[#F0F4FF] justify-center items-center px-5 py-1 gap-6 rounded-lg">
        <div className="font-montserrat font-bold text-xs tracking-[0.12em] text-[#3770ff]">
          DISCOVER
        </div>
        <div className="font-montserrat font-bold text-xs tracking-[0.12em] text-white bg-[#3770FF] px-4 py-3 rounded-[4px]">
          HACKATHONS
        </div>
        <div className="font-montserrat font-bold text-xs tracking-[0.12em] text-[#3770ff]">
          BUILDERS
        </div>
      </div>
    </div>
  );
};

export default Navbar;
