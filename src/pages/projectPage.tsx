import Navbar from "../components/Navbar";

const projectPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#C0C0C0]">
        <div>
          <p className="text-[28px] p-5 font-bold">
            <span className="bg-[#00FFFF] rounded-[10px_0px_0px_10px] px-[5px]">
              PRO
            </span>
            JECTS PAGE
          </p>
        </div>

        <div className="my-10 w-fit mx-auto">
          <h3 className="text-white text-xl">
            <span className="bg-[#FFA500] text-black font-bold">PORT </span>
            FOLIO 1
          </h3>
          <p className="text-xl font-semibold tracking-widest">
            CyberPro Group <br /> Official Website
          </p>
        </div>

        <div className="flex flex-col lg:flex-row w-[90%] mx-auto gap-5 lg:10">
          <img
            src="https://images.pexels.com/photos/29637182/pexels-photo-29637182/free-photo-of-artistic-portrait-of-dancer-with-floral-headpiece.jpeg"
            alt=""
            className="w-full h-[400px] object-cover rounded-lg lg:w-[500px] lg:h-[300px] flex-shrink-0"
          />
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-center">
              completed project: cyberPro group website
            </h3>
            <div className="text-center">
              <p className="font-bold">Overview</p>
              <p>
                We designed, developed, hosted, and currently maintain the
                official website for CyberPro Group, a leading company based in
                Canada and US. This project reflects our ability to create
                user-friendly, visually-appealing, and highly functional digital
                solutions tailored to our client’s needs.
              </p>
            </div>
            <div className="text-center">
              <p className="font-bold">Challenge</p>
              <p>
                CyberPro Group required a modern, professional, and responsive
                website that accurately represented their brand and services to
                a global audience. The goal was to enhance their online
                presence, improve user engagement, and ensure seamless
                functionality across all devices.
              </p>
            </div>
            <div className="text-center">
              <p className="font-bold">Solution</p>
              <p>
                Our team delivered a fully customized website featuring: A
                clean, modern design that aligns with CyberPro Group’s branding.
                Mobile responsiveness to ensure accessibility on all devices.
                Optimized performance for fast loading and smooth navigation. A
                secure hosting solution with ongoing maintenance to guarantee
                reliability and uptime.
              </p>
            </div>
            <div className="text-center">
              <p className="font-bold">Impact</p>
              <p>
                The new website has significantly improved CyberPro Group’s
                online visibility and credibility. Positive feedback from their
                team and clients highlights the success of this collaboration.
                The site remains a robust tool for engaging customers and
                showcasing their services globally.
              </p>
            </div>
            <button className="my-4 font-bold text-xl w-full text-center text-[#02BCFF]">
              Visit
            </button>
          </div>
        </div>
        <div className="w-full text-center py-5">
          <button className="bg-[#FFA500] rounded-[30px] px-5 py-2">
            NEXT PROJECT
          </button>
        </div>
      </div>
    </>
  );
};

export default projectPage;
