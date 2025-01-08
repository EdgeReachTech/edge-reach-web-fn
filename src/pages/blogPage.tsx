import React from "react";
import Navbar from "../components/Navbar";

const blogPage = () => {
  return (
    <>
    <Navbar />
    <div className="bg-[#C0C0C0]">
      <div>
        <p className="text-[28px] p-5 font-bold">
          <span className="bg-[#00FFFF] rounded-[10px_0px_0px_10px] px-[5px]">
            BLOG
          </span>
           PAGE
        </p>
      </div>

      <div className="my-10 w-fit mx-auto">
        <h3 className="text-3xl text-black font-bold">Read The Blog</h3>
      </div>

      <div className="flex flex-col w-[90%] mx-auto gap-5 lg:10">
        <img
          src="https://images.pexels.com/photos/29637182/pexels-photo-29637182/free-photo-of-artistic-portrait-of-dancer-with-floral-headpiece.jpeg"
          alt=""
          className="w-[90%] mx-auto border-[7px] border-yellow-500 h-[500px] object-cover rounded-lg flex-shrink-0" />
        <div className="space-y-5 px-2 lg:px-5">
          <h3 className="text-xl font-bold text-center">
            From Classroom to Boardroom: How Edgereach Tech Is Solving Real-Life
            Challenges Through Innovation
          </h3>
          <div className="text-center">
            <p className="font-bold">Introduction</p>
            <p>
              In a world increasingly driven by technology, innovation has
              become the cornerstone of success. At Edgereach Tech, our story is
              one of transformation—from a group of passionate university
              students to a professional team tackling real-world challenges
              with cutting-edge solutions. This journey, rooted in creativity
              and collaboration, reflects our commitment to making a difference
              in our community and beyond.
            </p>
          </div>
          <div className="text-center">
            <p className="font-bold">
              The Beginning: A Vision Born in the Classroom
            </p>
            <p>
              Edgereach Tech was founded by a group of second-year Business
              Information Technology (BIT) students at the University of Rwanda.
              As we navigated our coursework, we realized a glaring issue:
              numerous local IT challenges remained unaddressed. Many systems in
              use were uninspired, inefficient, and disconnected from the needs
              of the people they were meant to serve. <br /> <br />
              This realization ignited a vision. We saw the potential to
              leverage our skills, creativity, and collective passion to develop
              innovative solutions. What began as academic discussions quickly
              evolved into a shared mission: to design and deliver real-life
              projects that address pressing problems in our communities.
            </p>
          </div>
          <div className="text-center">
            <p className="font-bold">
              Bridging the Gap Between Theory and Practice
            </p>
            <p>
              One of the core principles that defines Edgereach Tech is our
              ability to bridge the gap between theoretical knowledge and
              practical application. As students, we studied the fundamentals of
              IT and business, but we went a step further by actively seeking
              ways to apply this knowledge to solve real-world problems. <br />
              <br />
              Our early projects, built on a foundation of collaboration and
              experimentation, focused on addressing pain points in areas like
              education, healthcare, and small business operations. This
              hands-on approach not only honed our technical skills but also
              instilled in us a deep appreciation for solutions that truly make
              a difference.
            </p>
          </div>
          <div className="text-center">
            <p className="font-bold">Innovation at the Heart of What We Do</p>
            <p>
              At Edgereach Tech, we believe that innovation is not just about
              creating new technologies—it’s about re-imagining how technology
              can serve people. This philosophy drives every project we
              undertake. From developing intuitive web applications to
              integrating AI and advanced cybersecurity measures, we are
              constantly pushing boundaries to deliver solutions that are as
              creative as they are effective.
              <br />
              <br />
              One key factor that sets us apart is our local focus. While many
              companies aim for global markets, we are committed to solving
              challenges specific to our community. Whether it’s designing
              systems to improve efficiency for local businesses or creating
              tools that empower undeserved populations, our work is deeply
              rooted in the realities of our environment.
            </p>
          </div>
          <div className="text-center">
            <p className="font-bold">From Students to Industry Leaders</p>
            <p>
              The transition from classroom projects to a professional IT
              company was not without its challenges. As young entrepreneurs, we
              faced obstacles ranging from resource constraints to gaining the
              trust of clients. However, our determination and belief in our
              mission kept us moving forward.
              <br />
              <br />
              Today, Edgereach Tech has grown into a company that delivers
              cutting-edge IT solutions across various industries. Our services
              include custom software development, IT consulting, and innovative
              projects that integrate AI and cybersecurity. Each project we
              undertake is a testament to our journey and the lessons we’ve
              learned along the way.
            </p>
          </div>
          <div className="text-center">
            <p className="font-bold">Looking Ahead: A Commitment to Impact</p>
            <p>
              As we continue to grow, our commitment to solving real-life
              challenges remains unwavering. We are expanding our research and
              development efforts to explore new frontiers in technology, from
              advanced AI applications to solutions that address emerging
              cybersecurity threats. Our story—from the classroom to the
              boardroom—is a reminder that innovation starts with a vision and
              the courage to act. At Edgereach Tech, we’re not just creating
              technology; we’re shaping the future, one solution at a time.
            </p>
          </div>
          <div className="text-center">
            <p className="font-bold">Conclusion</p>
            <p>
              The journey of Edgereach Tech is a testament to what is possible
              when passion meets purpose. From our humble beginnings as
              university students to our current role as innovators and industry
              leaders, we remain committed to our mission: to design, develop,
              and deliver technology that makes a real difference. Whether
              you’re a business looking for customized IT solutions or a
              community leader seeking ways to tackle local challenges, we
              invite you to join us on this journey. Together, we can create a
              brighter, more innovative future. This content captures your
              journey, values, and mission while maintaining a professional tone
              suitable for a blog post. Let me know if you’d like to refine or
              expand any part!
            </p>
          </div>
          <button className="my-4 font-bold text-xl w-full text-center text-[#02BCFF]">
            Visit
          </button>
        </div>
      </div>

      <div className="w-full text-center py-5 flex justify-around">
        <button className="bg-[#FFA500] rounded-[30px] w-[200px] py-3 text-[12px] text-white">
          COMMENT
        </button>
        <button className="bg-[#00FFFF] rounded-[30px] w-[200px] py-3 text-[12px] text-white">
          LIKE
        </button>
        <button className="bg-[#FFA500] rounded-[30px] w-[200px] py-3 text-[12px] text-white">
          NEXT ARTICLE
        </button>
      </div>
    </div></>
  );
};

export default blogPage;
