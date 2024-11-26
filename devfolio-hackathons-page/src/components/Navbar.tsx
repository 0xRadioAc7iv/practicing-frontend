const Navbar = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="flex max-w-min bg-[#F0F4FF] justify-center items-center px-4 py-1 gap-6 rounded-lg">
        <div className="text-[#3770ff]">DISCOVER</div>
        <div className="text-white bg-[#3770FF] px-4 py-2 rounded-[4px]">
          HACKATHONS
        </div>
        <div className="text-[#3770ff]">BUILDERS</div>
      </div>
    </div>
  );
};

export default Navbar;
