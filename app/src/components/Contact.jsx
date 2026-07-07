import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import map from "../assets/map.jpg"



export default function Contact() {
  return (
    <section id='contact' className='bg-gray-100 py-10 px-5'>
       <div className="text-center text-black mb-20 mt-20">
        <h2 className="text-2xl mb-4">CONTACT</h2>
        <p className="">Lets get in touch. Send us a message:</p>
      </div>

      <div className='text-xl flex flex-col gap-3 mb-10'>
        <p className='flex gap-2 items-center'>
            <FaLocationDot/>
             Chicago, US
        </p>
        <p className='flex gap-2 items-center'>
            <FaPhone/>
             Phone: +00 151515
        </p>
        <p className='flex gap-2 items-center'>
            <FaMessage/>
            Email: mail@mail.com
        </p>
      </div>
      <form action="" className='space-y-4 flex flex-col gap-2'>
        <input className='w-full p-2 bg-white ' type="text" placeholder='Name' required />
        <input  className='w-full p-2 bg-white ' type="email" placeholder='Email' required />
        <input  className='w-full p-2 bg-white ' type="text" placeholder='Subject' required />
        <input  className='w-full p-2 bg-white ' type="text" placeholder='Message' required />
        <button className="bg-black text-white px-5 py-2 max-w-fit flex items-center gap-3 hover:bg-gray-300 hover:text-black duration-300"
><IoIosSend/> Send Message</button>
      </form>
      <img src={map} className='w-full mt-16' alt="" />
    </section>
  )
}
