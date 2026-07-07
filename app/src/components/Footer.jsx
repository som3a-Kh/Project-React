import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaSnapchat } from 'react-icons/fa'
import { AiOutlineToTop } from "react-icons/ai";


export default function Footer() {
  return (
    <footer className='bg-black py-10 text-white flex flex-col items-center justify-center'>
<div>
    <button className='bg-white text-black py-3 max-w-fit px-10 mb-5   '><a href="#" className='flex gap-2'>  TO TOP  <AiOutlineToTop/></a></button>
    <div className='flex text-2xl gap-2'>
        <FaFacebook/>
        <FaInstagram/>
        <FaTwitter/>
        <FaLinkedin/>
        <FaSnapchat/>
    </div>
    <p className='text-[12px] mt-10'>Created by Ismail Khalifa.</p>
</div>
    </footer>
  )
}
