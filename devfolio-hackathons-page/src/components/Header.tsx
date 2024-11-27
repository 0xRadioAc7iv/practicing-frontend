const Header = () => {
  return (
    <div className="flex justify-between px-36 py-5 bg-white items-center">
      <div className="flex gap-8">
        <button>
          <img src="/nav_logo.svg" width="114" height="24" />
        </button>
        <div className="flex gap-4">
          <button className="font-nunito font-semibold text-base text-[#8e989c]">
            Home
          </button>
          <button className="font-nunito font-semibold text-base text-[#8e989c]">
            Blog
          </button>
        </div>
      </div>
      <button className="flex items-center gap-6">
        <div>
          <img
            src="/notifications.svg"
            width="24"
            height="24"
            className="opacity-45"
          />
        </div>
        <button className="flex items-center gap-2.5">
          <div>
            <img src="/user.png" width="36" />
          </div>
          <div className="font-nunito font-semibold text-lg">0xradioac7iv</div>
        </button>
      </button>
    </div>
  );
};

export default Header;
