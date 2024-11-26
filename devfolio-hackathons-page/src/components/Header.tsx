const Header = () => {
  return (
    <div className="flex justify-between px-40 py-6 border-b-2 border-gray-100 items-center">
      <div className="flex gap-8">
        <div>
          <img src="/nav_logo.svg" width="110" />
        </div>
        <div className="flex gap-5">
          <div className="text-[#8e989c] ">Home</div>
          <div className="text-[#8e989c]">Blog</div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div>
          <img src="/notifications.svg" width="24" />
        </div>
        <div className="flex items-center gap-2.5">
          <div>
            <img src="/user.png" width="36" />
          </div>
          <div>0xRadioAc7iv</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
