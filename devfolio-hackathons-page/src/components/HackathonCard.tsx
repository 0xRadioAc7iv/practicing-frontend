const HackathonCard = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <div>DeFy 25</div>
          <div>Hackathon</div>
        </div>
        <div className="flex gap-2">
          <div className="bg-[#f0f4ff] p-2 rounded-full">
            <img src="/twitter.svg" width="24" />
          </div>
          <div className="bg-[#f0f4ff] p-2 rounded-full">
            <img src="/instagram.svg" width="24" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center bg-[#fcfcfc]">
        <div>
          <div>THEME</div>
          <div className="border-2 border-gray-200 rounded-full px-2 py-1">
            No Restrictions
          </div>
        </div>
        <div className="flex relative">
          <div className="flex">
            <img src="/user-avatar.jpeg" width="36" className="rounded-full" />
            <img src="/user-avatar.jpeg" width="36" className="rounded-full" />
            <img src="/user-avatar.jpeg" width="36" className="rounded-full" />
          </div>
          <div className="text-[#0fa38d]">+1000 participating</div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-[#f5f7f7] px-3 py-2 rounded-xl">OFFLINE</div>
          <div className="bg-[#f5f7f7] px-3 py-2 rounded-xl">OPEN</div>
          <div className="bg-[#f5f7f7] px-3 py-2 rounded-xl">
            STARTS 30/12/24
          </div>
        </div>
        <div>
          <button className="text-white bg-[#3770ff] px-5 py-3 rounded-lg border-1 border-[#2368fb]">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HackathonCard;
