import React from "react";
import one from "../assets/team2.jpg";
import two from "../assets/team1.jpg";
import three from "../assets/team3.jpg";
import four from "../assets/team4.jpg";

import { IoIosMail } from "react-icons/io";

export default function Team() {
  const teams = [
    {
      img: one,
      name: "John Doe",
      job: "CEO & Founder",
      desc: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
    },

    {
      img: two,
      name: "Anja Doe",
      job: "Art Director",
      desc: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
    },

    {
      img: three,
      name: "Mike Ross",
      job: "Web Designer",
      desc: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
    },

    {
      img: four,
      name: "Dan Star",
      job: "Designer",
      desc: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
    },
  ];

  return (
    <section id="team" className="py-30">
      <div className="text-center text-black mb-20">
        <h2 className="text-2xl mb-4">THE TEAM</h2>
        <p className="text-gray-500">The ones who runs this company</p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5">
        {teams.map((member, index) => (
          <div key={index} className="shadow-lg p-3">
            <img
              src={member.img}
              alt=""
              className="w-full h-70 object-cover grayscale-75"
            />
            <h3 className="mt-4 text-xl">{member.name}</h3>
            <p className="text-[11px] opacity-[0.6] mt-4">{member.job}</p>
            <p className="text-[12px] mt-4 opacity-[0.8]">{member.desc}</p>
            <button className="bg-gray-100 w-full px-3 py-2 flex  items-center justify-center mt-4 hover:bg-gray-300 duration-300 gap-1 text-[13px]  ">
              <IoIosMail />
              Contact
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 bg-gray-600 gap-5 text-center py-15 text-white">
        <div>
          <span className="text-3xl">14+</span>
          <p className="text-[12px]">Partners</p>
        </div>
        <div>
          <span className="text-3xl">55+</span>
          <p className="text-[12px]">Projects Done</p>
        </div>
        <div>
          <span className="text-3xl">89+</span>
          <p className="text-[12px]">Happy Clients</p>
        </div>
        <div>
          <span className="text-3xl">150+</span>
          <p className="text-[12px]">Meetings</p>
        </div>
      </div>
    </section>
  );
}
