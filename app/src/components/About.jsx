import React from "react";
import { FaDesktop } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaGem } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import aboutImg from "../assets/phone_buildings.jpg";

export default function About() {
  const cards = [
    {
      icon: <FaDesktop />,
      title: "Responsive",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },

    {
      icon: <FaHeart />,
      title: "Passion",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },

    {
      icon: <FaGem />,
      title: "Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      icon: <FaCog />,
      title: "Support",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
  ];
  return (
    <section id="about" className="py-30">
      <div className="text-center text-black mb-20">
        <h2 className="text-2xl mb-4">ABOUT THE COMPANY</h2>
        <p className="text-gray-500">Key features of our company</p>
      </div>

      <div className="grid grid-cols-4 ">
        {cards.map((card, index) => (
          <div key={index} className="text-center">
            <div className="text-5xl flex justify-center mb-6">{card.icon}</div>

            <div className="mb-4">{card.title}</div>

            <div className="text-sm text-gray-500">{card.desc}</div>
          </div>
        ))}
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 justify-between bg-gray-100 w-full h-125 mt-30 items-center">
        <div className="flex flex-col ml-4 ">
          <h2 className="mb-3">We know design.</h2>
          <p className="text-[12px] text-gray-700 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br/> tempor incididunt ut labore et dolore.
          </p>
          <button  className="text-[14px] py-2 px-3 w-fit bg-black gap-2 flex justify-center items-center text-white hover:bg-gray-200 hover:text-black duration-300 " >
            <FaNetworkWired /> view our works
          </button>
        </div>

        <div className="w-150">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </section>
  );
}
