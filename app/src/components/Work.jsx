import React, { useState } from "react";
import work1 from "../assets/tech_camera.jpg";
import work2 from "../assets/tech_drone.jpg";
import work3 from "../assets/tech_mic.jpg";
import work4 from "../assets/tech_phone.jpg";
import work5 from "../assets/tech_sound.jpg";
import work6 from "../assets/tech_tablet.jpg";
import work7 from "../assets/tech_tableturner.jpg";
import work8 from "../assets/tech_typewriter.jpg";

import { FaCamera } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaImage } from "react-icons/fa";

export default function Work() {
  const [selectedImg, setSelectedImg] = useState();

  const works = [
    {
      img: work1,
      title: "camera",
    },
    {
      img: work2,
      title: "drone",
    },
    {
      img: work3,
      title: "mic",
    },
    {
      img: work4,
      title: "phone",
    },
    {
      img: work5,
      title: "sound",
    },
    {
      img: work6,
      title: "tablet",
    },
    {
      img: work7,
      title: "tableturner",
    },
    {
      img: work8,
      title: "typewriter",
    },
  ];
  const skills = [
    {
      icon: <FaCamera />,
      name: "Photography",
      percent: "90%",
      width: "90%",
    },
    {
      icon: <FaDesktop />,
      name: "Web Design",
      percent: "85%",
      width: "85%",
    },
    {
      icon: <FaImage />,
      name: "Photoshop",
      percent: "75%",
      width: "75%",
    },
  ];
  return (
    <section id="work" className="py-30">
      <div className="text-center text-black mb-20">
        <h2 className="text-2xl mb-4">OUR WORK</h2>
        <p className="text-gray-500">What we've done for people</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 cursor-pointer px-5">
        {works.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden"
            onClick={() => setSelectedImg(item)}
          >
            <img src={item.img} className="w-full object-cover" alt="" />
            <div
              className="
                absolute
                inset-0
                bg-white/40
                opacity-0
                group-hover:opacity-100
                duration-300
                cursor-pointer
                "
            ></div>
          </div>
        ))}
      </div>

      {selectedImg && (
        <div
          className="
fixed
inset-0
bg-black
z-1000
flex
flex-col
justify-center
items-center
duration-300
"
        >
          <button
            onClick={() => setSelectedImg()}
            className="
absolute
top-5
right-8
text-white
text-5xl
cursor-pointer
hover:text-gray-400
duration-300
"
          >
            x
          </button>

          <img src={selectedImg.img} alt="" className="" />

          <p className="text-white mt-5 text-xl">{selectedImg.title}</p>
        </div>
      )}

      <div className=" grid grid-cols-1 lg:grid-cols-2 bg-gray-100 mt-20 py-20">
        <div className="px-5">
          <h3 className="mb-4 ">Our Skills.</h3>
          <p className="text-[13px] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br />
            tempor incididunt ut labore et dolore.
          </p>
          <p className="text-[13px] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br />
            tempor incididunt ut labore et dolore.
          </p>
        </div>

        <div>
          {skills.map((skill, index) => (
            <div key={index} className="mb-4 px-5">
              <div className="flex items-center gap-3 mb-2">
                {skill.icon}
                <p>{skill.name}</p>
              </div>
              <div className="bg-gray-300 w-full">
                <div
                  style={{
                    width: skill.width,
                  }}
                  className="bg-gray-600 text-white text-center"
                >
                  {skill.percent}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
