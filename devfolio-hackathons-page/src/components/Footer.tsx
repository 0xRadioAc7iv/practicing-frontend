const Footer = () => {
  return (
    <div className="flex flex-col bg-[#F5F7F7] items-center py-[90px] px-36">
      <div className="flex flex-row gap-80 justify-between mb-4">
        <div className="flex flex-col gap-16">
          <div className="text-5xl font-nunito font-black text-[#20282d]">
            We love <span className="text-[#81a2ef]">software</span> and the{" "}
            <span className="text-[#eeb27b]">people</span> who build it.
          </div>
          <div className="flex gap-4">
            <img
              src="/telegram-color.svg"
              width="24"
              className="opacity-50 hover:opacity-100"
            />
            <img
              src="/twitter-color.svg"
              width="24"
              className="opacity-50 hover:opacity-100"
            />
            <img
              src="/discord-color.svg"
              width="24"
              className="opacity-50 hover:opacity-100"
            />
            <img
              src="/dribbble-color.svg"
              width="24"
              className="opacity-50 hover:opacity-100"
            />
            <img
              src="/github-color.svg"
              width="24"
              className="opacity-50 hover:opacity-100"
            />
            <img
              src="/linkedin-color.svg"
              width="24"
              className="opacity-50 hover:opacity-100"
            />
            <img
              src="/farcaster-color.svg"
              width="24"
              className="opacity-50 hover:opacity-100"
            />
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col gap-2">
            <div className="font-montserrat text-[#8e989c] font-bold text-sm tracking-[0.12em] mb-2">
              COMMUNITY
            </div>
            <div className="font-normal font-nunito text-lg text-[#273339] whitespace-nowrap">
              Organize a hackathon
            </div>
            <div className="font-normal font-nunito text-lg text-[#273339]">
              Explore hackathons
            </div>
            <div className="font-normal font-nunito text-lg text-[#273339]">
              Code of Conduct
            </div>
            <div className="font-normal font-nunito text-lg text-[#273339]">
              Brand Assets
            </div>
            <div className="font-normal font-nunito text-lg text-[#273339]">
              Documentation
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-montserrat text-[#8e989c] font-bold text-sm tracking-[0.12em] mb-2">
              COMPANY
            </div>
            <div className="font-normal font-nunito text-lg text-[#273339]">
              About
            </div>
            <div className="font-normal font-nunito text-lg text-[#273339]">
              Blog
            </div>
            <div className="font-normal font-nunito text-lg text-[#273339]">
              Careers
            </div>
            <div className="font-normal font-nunito text-lg text-[#273339]">
              Changelog
            </div>
            <div className="font-normal font-nunito text-lg text-[#273339]">
              Privacy
            </div>
            <div className="font-normal font-nunito text-lg text-[#273339]">
              Terms
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-montserrat text-[#8e989c] font-bold text-sm tracking-[0.12em] mb-3">
              SUPPORT
            </div>
            <div className="font-normal font-nunito text-lg text-[#273339]">
              Help
            </div>
            <div className="font-normal font-nunito text-lg text-[#273339]">
              Status
            </div>
            <div className="font-normal font-nunito text-lg text-[#273339] whitespace-nowrap">
              Contact us
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full items-center gap-8">
        <div className="flex flex-col w-full align-bottom gap-2">
          <hr className="w-full border-t-[1px] border-[#8e989c] mb-4" />
          <div>
            <img src="/devfolio.svg" width="122" height="34" />
          </div>
        </div>
        <div>
          <img src="never-stop-building.svg" width="280" />
        </div>
      </div>
      <div className="flex w-full justify-start mt-12">
        <div className="font-nunito">© 2024, NSB Classic PTE LTD</div>
      </div>
    </div>
  );
};

export default Footer;
