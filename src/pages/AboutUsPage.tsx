import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import goalIcon from "../assets/goal.png";
import image from "../assets/hero image 4.webp";
import leaderShipIcon from "../assets/leadership.png";
import strategicIcon from "../assets/strategic-vision.png";
import uniquenessIcon from "../assets/uniqueness.png";
import Navbar from "../components/Navbar";

const AboutUsPage: React.FC = () => {
  // const navigate = useNavigate();
  return (
    <><Navbar /><div className="flex flex-col relative bg-[#C0C0C0] p-4 md:p-16 w-full min-h-screen">
      <div className="font-loboto text-[15px] md:text-[25px] font-bold ml-5 md:ml-10">
        <span className="bg-gradient-to-r from-[#00FFFF] to-[#008080] p-1 rounded-sm">
          About
        </span>
        Us Page
      </div>

      <div className="flex justify-center items-center">
        <div className="md:max-w-[1050px] max-w-[500px] md:p-6 p-4 text-center md:text-center md:mt-5 mt-2">
          <h2 className="font-semibold text-[15px] md:text-[25px] mb-2 md:mb-4">Our Story</h2>
          <p className="text-[13px] md:text-[15px] font-loboto leading-relaxed text-gray-800">
            Edgereach Tech was born out of a shared vision among a group of
            passionate students from the University of Rwanda, studying Business
            Information Technology, BIT!!. During our second year, we recognized a
            critical gap: numerous IT challenges in our communities remained
            unsolved, and many systems lacked creativity and the ability to
            address real-world needs.
          </p>
          <p className="text-[13px] md:text-[15px] font-loboto leading-relaxed text-gray-800 mt-2">
            Driven by a desire to make a difference, we came together with a
            mission to create practical, impactful projects that solve local
            pain points. We saw an opportunity to use our knowledge, creativity,
            and collaboration to bridge the gap between technology and everyday
            challenges.
          </p>
          <p className="text-[13px] md:text-[15px] font-loboto leading-relaxed text-gray-800 mt-2">
            What started as an idea among students has grown into a company
            dedicated to developing innovative, real-life solutions that empower
            individuals, businesses, and communities. At Edgereach Tech, we are
            committed to building a brighter future through technology that
            matters.
          </p>
        </div>
      </div>

      <div className="relative ml-[30px] md:ml-[150px]">
        <div className="relative pb-10 md:pb-16 mb-4 md:mb-14 mt-5 md:mt-10">
          <div className="relative bg-[#008080] w-8 md:w-40 h-[200px] md:h-[450px] top-5 md:top-10 rounded-lg"></div>
          <div
            style={{
              background: "linear-gradient(270deg, #FFFFFF 20.25%, #999999 93.37%)",
            }}
            className="w-8 md:w-40 h-[210px] md:h-[300px] absolute rounded-lg top-[110px] md:top-[300px] left-[10px] md:left-[60px] z-[1] "
          ></div>
          <div className="bg-slate-600 h-[180px] lg:h-[400px] md:h-[300px] w-[260px] lg:w-[800px] md:w-[500px] absolute top-[2px] md:top-[10px] left-6 md:left-36 shadow-md rounded-lg overflow-hidden">
            <img src={image} alt="image" className="object-cover" />
          </div>
          <div className="ml-[50px] md:ml-[250px] max-w-[300px] md:max-w-[700px]">
            <p className="font-loboto text-[12px] md:text-[15px]">
              EdgeReach Tech, we are dynamic and innovative technology company
              that is committed to delivering cutting-edge solutions for our
              clients. With a team of talented professionals, we strive to push
              boundaries and explore new frontiers in digital landscape.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        <div className="flex flex-col ml-5 md:ml-5 mt-2 md:mt-10">
          <div className=" flex flex-row gap-2 ">
            <img src={strategicIcon} alt="strategic_Icon" className="w-[14px] md:w-4 h-[14px] md:h-4" />
            <h1 className="font-loboto font-bold text-[13px] md:text-[15px]">OUR VISION</h1>
          </div>
          <div className="flex flex-row gap-4">
            <p className="font-loboto text-gray-800 max-w-[300px] leading-relaxed mt-5">
              We envision a world where technology empowers individuals,
              businesses, and entire nations to break through perceived
              limitations. Our goal is to become a global leader in software and
              system engineering, delivering solutions that elevate Rwanda and
              the world by driving innovation, enhancing efficiency, and
              enabling unseen possibilities to become realities. We want to
              inspire confidence in the ability to solve problems that were once
              thought impossible, proving that we are capable of achieving
              greatness, both locally and abroad.
            </p>
            <div className="md:bg-gray-600 md:w-[3px] md:h-[500px]" />
          </div>
        </div>

        <div className="flex flex-col ml-5 mt-10">
          <div className=" flex flex-row items-center gap-2 ">
            <img
              src={uniquenessIcon}
              alt="strategic_Icon"
              className="w-4 h-4" />
            <h1 className="font-loboto font-bold text-[15px]">
              PROBLEM STATEMENT
            </h1>
          </div>
          <div className="flex flex-row gap-4">
            <p className="font-loboto text-gray-800 max-w-[300px] leading-relaxed mt-5">
              In today's fast-evolving technological landscape, businesses and
              individuals face inefficiencies, unrecognized gaps, and outdated
              systems that fail to address real-life problems. Many existing
              solutions only scratch the surface of user needs, overlooking
              deeper challenges or potential innovations. The lack of intuitive,
              innovative systems that truly enhance productivity, streamline
              processes, and solve hidden issues prevents societies—especially
              in emerging markets like Rwanda—from realizing their full
              potential. There's a widespread assumption that certain goals are
              unattainable, limiting growth and innovation, when in reality,
              with the right approach, solutions are well within reach.
            </p>
            <div className="md:bg-gray-600 md:w-[3px] md:h-[500px]" />
          </div>
        </div>

        <div className="flex flex-col ml-5 mt-10">
          <div className=" flex flex-row items-center gap-2 ">
            <img
              src={leaderShipIcon}
              alt="strategic_Icon"
              className="w-4 h-4" />
            <h1 className="font-loboto font-bold text-[15px]">OUR MISSION</h1>
          </div>
          <div className="flex flex-row gap-4">
            <p className="font-loboto text-gray-800 max-w-[300px] leading-relaxed mt-5">
              Our mission is to design and develop innovative software solutions
              that tackle visible and hidden gaps in everyday life and business
              systems. By focusing on real-life challenges, we aim to create
              intuitive, efficient systems that solve problems and uncover
              growth opportunities. We strive to bridge the technology gap,
              making solutions accessible to all sectors—locally and globally—so
              that everyone can achieve more, be more productive, and realize
              that no challenge is insurmountable.
            </p>
            <div className="md:bg-gray-600 md:w-[3px] md:h-[600px]" />
          </div>
        </div>

        <div className="flex flex-col ml-5 mt-10">
          <div className=" flex flex-row items-center gap-2 ">
            <img src={goalIcon} alt="strategic_Icon" className="w-4 h-4" />
            <h1 className="font-loboto font-bold text-[15px]">
              OUR OBJECTIVES
            </h1>
          </div>
          <div className="flex flex-row gap-4">
            <p className="font-loboto text-gray-800 max-w-[450px] leading-relaxed mt-5">
              1. To design, develop, and market web applications and software
              that address real-life challenges. <br />
              2. To undertake custom software development projects aimed at
              solving existing and unsolved problems across various industries.{" "}
              <br />
              3. To provide IT consulting and advisory services to assist
              clients in achieving their business objectives through technology.{" "}
              <br />
              4. To engage in research and development activities to innovate
              and create new software solutions. <br />
              5. To offer training and support services related to the company's
              software products and solutions. <br />
              6. To provide advanced cybersecurity solutions, including risk
              assessments, penetration testing, and implementation of secure
              systems, to safeguard businesses and individuals against evolving
              threats. <br />
              7. To develop, integrate, and deploy artificial intelligence (AI)
              technologies to enhance decision-making, process automation, and
              overall efficiency for clients across industries. <br />
              8. To engage in any other lawful business or activity that is
              related or incidental to the aforementioned objects or that the
              company deems advantageous
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="max-w-[1050px] md:max-w-[1000px] p-6 md:text-center mt-4 md:mt-20">
          <h2 className="font-semibold text-[25px] mb-4">What Sets Us Apart</h2>
          <p className="text-[15px] font-loboto leading-relaxed md:leading-relaxed text-gray-800">
            At Edgereach Tech, we are uniquely positioned to address real-world
            challenges because our journey began with firsthand experience as
            students at the University of Rwanda. This foundation allows us to
            design solutions that are both creative and practical, bridging the
            gap between innovation and functionality. Unlike many generic
            systems, our focus is on solving pain points specific to our
            community, empowering local industries and organizations with
            tailor-made solutions. Collaboration is at the heart of everything
            we do, drawing on diverse perspectives to create groundbreaking and
            impactful results. Our passion for innovation drives us to leverage
            technology and AI ensures that we deliver cutting-edge solutions
            that keep our clients secure and ahead in the digital landscape.
          </p>
          <p className="text-[15px] font-loboto leading-relaxed md:leading-relaxed text-gray-800 mt-3 md:mt-4">
            Additionally, our expertise in the future through research and
            development. Additionally, our expertise in excellence ensures that
            we deliver cutting-edge solutions that keep our clients secure and
            ahead in the digital landscape. Above all, we are committed to
            excellence and professionalism, treating every project as an
            opportunity to deliver exceptional value and make a lasting impact.
          </p>
        </div>
        <div className="flex flex-col p-2 mt-2 md:mt-6 w-80 md:w-96 bg-gradient-to-t from-[#FFA500] to-[#FFE600] rounded-lg shadow-md">
          <h2 className="mb-1 text-center">Follow Us</h2>

          <div className="flex flex-row gap-2 justify-center items-center">
            <FaPinterestP className="hover:text-white" />
            <IoLogoGithub className="hover:text-white" />
            <TiSocialLinkedinCircular className="hover:text-white" />
            <CiInstagram className="hover:text-white" />
            <FaXTwitter className="hover:text-white" />
            <FaFacebookF className="hover:text-white" />
          </div>
        </div>
      </div>
    </div></>
  );
};

export default AboutUsPage;
