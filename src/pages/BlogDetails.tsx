import React from "react";
import image from "../assets/image2.webp";
const BlogDetails: React.FC = () => {
  return (
    <div className="bg-[#C0C0C0] p-4 md:p-16 min-h-screen">
      <div className="font-bold font-loboto text-[20px]">
        <h2>
          <span className="bg-gradient-to-t from-[#00FFFF] to-[#008080] p-1 rounded-md">
            UP
          </span>
          DATES PAGES
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center mt-10 lg:mt-20">
        <h2 className="font-bold font-loboto text-[28px]">Read The Blog</h2>

        <div className="border-2 border-[#FFA500] w-[350px] lg:w-[1000px] lg:h-[550px] mt-10 rounded-lg overflow-hidden">
          <img src={image} alt="image 1" className=" object-cover" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-5 lg:mt-10">
        <h2 className="font-bold font-loboto max-w-[600px] text-center">
          From Classroom to Boardroom: How Edgereach Tech Is Solving Real-Life
          Challenges Through Innovation
        </h2>
        <div className="flex flex-col justify-center items-center mt- lg:mt-10">
          <h1 className="font-loboto font-bold">Introduction</h1>
          <p className="text-center font-loboto mt-3 max-w-[1000px]">
            In a world increasingly driven by technology, innovation has become
            the cornerstone of success. At Edgereach Tech, our story is one of
            transformation—from a group of passionate university students to a
            professional team tackling real-world challenges with cutting-edge
            solutions. This journey, rooted in creativity and collaboration,
            reflects our commitment to making a difference in our community and
            beyond.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-5 lg:mt-10">
          <h1 className="font-loboto font-bold">
            The Beginning: A Vision Born in the Classroom
          </h1>
          <p className="text-center font-loboto mt-3 max-w-[1000px]">
            IEdgereach Tech was founded by a group of second-year Business
            Information Technology (BIT) students at the University of Rwanda.
            As we navigated our coursework, we realized a glaring issue:
            numerous local IT challenges remained unaddressed. Many systems in
            use were uninspired, inefficient, and disconnected from the needs of
            the people they were meant to serve. <br /> <br />
            This realization ignited a vision. We saw the potential to leverage
            our skills, creativity, and collective passion to develop innovative
            solutions. What began as academic discussions quickly evolved into a
            shared mission: to design and deliver real-life projects that
            address pressing problems in our communities.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-5 lg:mt-10">
          <h1 className="font-loboto font-bold">
            Bridging the Gap Between Theory and Practice
          </h1>
          <p className="text-center font-loboto mt-3 max-w-[1000px]">
            One of the core principles that defines Edgereach Tech is our
            ability to bridge the gap between theoretical knowledge and
            practical application. As students, we studied the fundamentals of
            IT and business, but we went a step further by actively seeking ways
            to apply this knowledge to solve real-world problems. <br /> <br />
            Our early projects, built on a foundation of collaboration and
            experimentation, focused on addressing pain points in areas like
            education, healthcare, and small business operations. This hands-on
            approach not only honed our technical skills but also instilled in
            us a deep appreciation for solutions that truly make a difference
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-5 lg:mt-10">
          <h1 className="font-loboto font-bold">
            Innovation at the Heart of What We Do
          </h1>
          <p className="text-center font-loboto mt-3 max-w-[1000px]">
            At Edgereach Tech, we believe that innovation is not just about
            creating new technologies—it’s about re-imagining how technology can
            serve people. This philosophy drives every project we undertake.
            From developing intuitive web applications to integrating AI and
            advanced cybersecurity measures, we are constantly pushing
            boundaries to deliver solutions that are as creative as they are
            effective. <br /> <br />
            One key factor that sets us apart is our local focus. While many
            companies aim for global markets, we are committed to solving
            challenges specific to our community. Whether it’s designing systems
            to improve efficiency for local businesses or creating tools that
            empower undeserved populations, our work is deeply rooted in the
            realities of our environment.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-5 lg:mt-10">
          <h1 className="font-loboto font-bold">
            From Students to Industry Leaders
          </h1>
          <p className="text-center font-loboto mt-3 max-w-[1000px]">
            The transition from classroom projects to a professional IT company
            was not without its challenges. As young entrepreneurs, we faced
            obstacles ranging from resource constraints to gaining the trust of
            clients. However, our determination and belief in our mission kept
            us moving forward. <br />
            <br />
            Today, Edgereach Tech has grown into a company that delivers
            cutting-edge IT solutions across various industries. Our services
            include custom software development, IT consulting, and innovative
            projects that integrate AI and cybersecurity. Each project we
            undertake is a testament to our journey and the lessons we’ve
            learned along the way.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-5 lg:mt-10">
          <h1 className="font-loboto font-bold">
            Looking Ahead: A Commitment to Impact
          </h1>
          <p className="text-center font-loboto mt-3 max-w-[1000px]">
            As we continue to grow, our commitment to solving real-life
            challenges remains unwavering. We are expanding our research and
            development efforts to explore new frontiers in technology, from
            advanced AI applications to solutions that address emerging
            cybersecurity threats. Our story—from the classroom to the
            boardroom—is a reminder that innovation starts with a vision and the
            courage to act. At Edgereach Tech, we’re not just creating
            technology; we’re shaping the future, one solution at a time.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center mt-5 lg:mt-10">
          <h1 className="font-loboto font-bold">Conclusion</h1>
          <p className="text-center font-loboto mt-3 max-w-[1000px]">
            The journey of Edgereach Tech is a testament to what is possible
            when passion meets purpose. From our humble beginnings as university
            students to our current role as innovators and industry leaders, we
            remain committed to our mission: to design, develop, and deliver
            technology that makes a real difference. Whether you’re a business
            looking for customized IT solutions or a community leader seeking
            ways to tackle local challenges, we invite you to join us on this
            journey. Together, we can create a brighter, more innovative future.
            This content captures your journey, values, and mission while
            maintaining a professional tone suitable for a blog post. Let me
            know if you’d like to refine or expand any part!
          </p>
        </div>

        <div className="flex flex-row gap-2 lg:gap-60 mt-5 lg:mt-10">
          <button className="font-loboto text-white h-10 w-32 bg-gradient-to-r from-[#FFA500] to-[#FFE500] p-2 rounded-[20px] shadow-sm hover:opacity-60">
            Comment
          </button>

          <button className="font-loboto text-white h-10 w-32 bg-gradient-to-r from-[#00FFFF] to-[#008080] p-2 rounded-[20px] shadow-sm hover:opacity-60">
            Like 
          </button>

          <button className="font-loboto text-white h-10 w-32 bg-gradient-to-t from-[#FFA500] to-[#FFE500] p-2 rounded-[20px] shadow-sm hover:opacity-60">
            Next Article
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
