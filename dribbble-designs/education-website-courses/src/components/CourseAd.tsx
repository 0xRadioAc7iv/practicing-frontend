import profile from "../assets/profile.png";

const CourseAd = () => {
  return (
    <div className="flex flex-col justify-between h-full gap-6 bg-[#151313] text-white px-8 py-4 text-sm text-center font-kodchasan rounded-2xl">
      <div>New Course matching your interests</div>
      <div className="flex flex-col gap-2">
        <div className="w-[50%] border text-[#151313] border-black text-sm font-semibold px-3 py-1 rounded-lg bg-[#fccc42]">
          Computer Science
        </div>
        <div className="text-xl font-medium text-left">
          Microsoft Future Ready: Fundamentals of Big Data
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-sm text-left">They are already studying</div>
        <div className="flex items-center relative">
          <img
            src={profile}
            className="rounded-full border border-black"
            width={48}
          />
          <img
            src={profile}
            className="absolute left-[24px] rounded-full border border-black"
            width={48}
          />
          <img
            src={profile}
            className="absolute left-[48px] rounded-full border border-black"
            width={48}
          />
          <img
            src={profile}
            className="absolute left-[72px] rounded-full border border-black"
            width={48}
          />
          <div className="flex justify-center items-center absolute left-[96px] w-12 h-12 border text-center text-[#151313] bg-[#fccc42] border-black text-sm font-bold rounded-full">
            +100
          </div>
        </div>
      </div>
      <div className="text-white bg-[#ff5734] cursor-pointer px-2 py-1.5 rounded-xl">
        More details
      </div>
    </div>
  );
};

export default CourseAd;
