import React from 'react'
import heroImg from "../assets/mac.jpg"
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaSnapchat } from 'react-icons/fa'
export default function Hero() {
  return (
    <header className='hero'>
      <div className='absolute bg-black/50 inset-0'></div>
      
<div className='content pl-10 z-10'>
  <h1 className='text-[65px] mb-7 font-thin '>Start something that matters</h1>
  <p className='mb-4'>Stop wasting valuable time with projects that just isn't you.</p>
  <button className='py-3 px-3 text-xl mt-6 bg-gray-600 text-black hover:bg-gray-300 duration-300'>Learn more and start today</button>
</div>
<div className='text-gray-300 absolute bottom-8 flex gap-1 text-sm pl-5 cursor-pointer'>
  <FaFacebook/>
  <FaInstagram/>
  <FaSnapchat/>
  <FaTwitter/>
  <FaLinkedin/>
</div>

    </header>
  )
}
