const Footer = () => {
  return (
    <div className="flex flex-col bg-[#F5F7F7] items-center py-12">
      <div className="flex flex-row gap-24 justify-between">
        <div className="flex flex-col">
          <div className="text-5xl text-wrap">
            We love <span className="text-[#81a2ef]">software</span> and the{" "}
            <span className="text-[#eeb27b]">people</span> who build it
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
        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <div className="mb-2">COMMUNITY</div>
            <div>Organize a hackathon</div>
            <div>Explore hackathons</div>
            <div>Code of Conduct</div>
            <div>Brand Assets</div>
            <div>Documentation</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mb-3">COMPANY</div>
            <div>About</div>
            <div>Blog</div>
            <div>Careers</div>
            <div>Changelog</div>
            <div>Privacy</div>
            <div>Terms</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mb-3">SUPPORT</div>
            <div>Help</div>
            <div>Status</div>
            <div>Contact us</div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <div>
            <hr className="w-full" />
          </div>
          <div>
            <img src="/devfolio.svg" width="122" height="34" />
          </div>
        </div>
        <div>
          <img src="never-stop-building.svg" width="195" height="120" />
        </div>
      </div>
      <div>© 2024, NSB Classic PTE LTD</div>
    </div>
  );
};

export default Footer;
