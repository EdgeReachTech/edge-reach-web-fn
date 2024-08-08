import IMG72 from "../assets/serviceimage/IMG-72.jpg";
import IMG86 from "../assets/serviceimage/IMG-86.jpg";
import IMG129 from "../assets/serviceimage/IMG-129.jpg";
import { FaChevronRight } from "react-icons/fa";

const OurTeamComponent = () => {
    const teamMembers = [
        {
            img: IMG129,
            name: "RODRIGUE",
            role: "PM"
        },
        {
            img: IMG86,
            name: "FIACRE",
            role: "CAM"
        },
        {
            img: IMG72,
            name: "JAY",
            role: "BA"
        },
    ]
    return (
        <div className="flex flex-col items-center gap-5 py-5 bg-black">
            <h1 className="uppercase text-white"><span className="bg-sky-500 text-black p-[2px] rounded-[5px]">our</span> team</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-[100px]">
                {teamMembers.map((member) => (
                    <div key={member.img} >
                        <img src={member.img} alt="teamMember" className="w-[220px] h-[250px] object-cover rounded-lg" />
                        <div className="bg-slate-300 p-2 mx-5 rounded-lg relative -top-10 space-y-2">
                            <p className="text-[15px] font-bold text-center uppercase text-sky-400">{member.name}</p>
                            <p className="text-center text-[12px] font-medium uppercase text-sky-400">{member.role}</p>
                            <div className="flex items-center justify-center gap-2">
                                <div className="border-2 border-black/50 w-2 h-2 rounded-full"></div>
                                <div className="border-2 border-black/50 w-2 h-2 rounded-full"></div>
                                <div className="border-2 border-black/50 w-2 h-2 rounded-full"></div>
                                <div className="border-2 border-black/50 w-2 h-2 rounded-full"></div>
                                <div className="border-2 border-black/50 w-2 h-2 rounded-full"></div>
                                <div className="border-2 border-black/50 w-2 h-2 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="bg-slate-300 p-2 rounded-[30px] font-normal text-sm md:text-xl w-[200px] md:w-[400px] flex items-center justify-center gap-4">view all portfolios <FaChevronRight className="w-4 h-4 mt-1" /> </button>
        </div>
    )
}

export default OurTeamComponent