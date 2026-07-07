import React , {useState} from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaNetworkWired } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import About from "./About";

export default function Navbar() {
  const [open , setOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center shadow-md fixed top-0 w-full bg-white z-100">
      <a className=" tracking-[5px] hover:bg-gray-300 px-3 py-4" href="#">
        LOGO
      </a>
      <button
       className="lg:hidden text-2xl cursor-pointer px-5"
       onClick={() => setOpen(true)}>
        <FaBars/>
      </button>
      <ul className=" cursor-pointer hidden lg:flex gap-6">
        <li>
          <a className="flex items-center px-3 py-4 hover:bg-gray-300" href= "#about">
            ABOUT
            </a>
          </li>

        <li>
          <a className="px-3 py-4 hover:bg-gray-300 gap-1  flex items-center " href="#team">
          <IoPersonSharp />
          TEAM
          </a>
        </li>

        <li >
          <a className="flex gap-1 items-center px-3 py-4 hover:bg-gray-300" href="#work">
            <FaNetworkWired />
          WORK
          </a>
        </li>

        <li >
          <a className="flex gap-1 items-center px-3 py-4 hover:bg-gray-300" href="#pricing">
            <FaDollarSign />
          PRICING
          </a>
        </li>

        <li >
          <a className="flex gap-1 items-center px-3 py-4 hover:bg-gray-300"  href="#contact">
            <IoIosMail />
          CONTACT
          </a>
        </li>
      </ul>
      
        <ul 
        className={`top-0 left-0 h-screen w-64 bg-black text-white z-50 duration-300 fixed flex-col
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}>
          <button
          onClick={()=> setOpen(false)}
          className="max-w-fit text-left px-6 py-6 text-2xl hover:bg-gray-800"
          >
            X
          </button>
          <li><a onClick={() => setOpen(false)} href="#about" className="block p-4">ABOUT</a></li>
          <li><a onClick={() => setOpen(false)} href="#team" className="block p-4">TEAM</a></li>
          <li><a onClick={() => setOpen(false)} href="#work" className="block p-4">WORK</a></li>
          <li><a onClick={() => setOpen(false)} href="#pricing" className="block p-4">PRICING</a></li>
          <li><a onClick={() => setOpen(false)} href="#contact" className="block p-4">CONTACT</a></li>
        </ul>
      
    </nav>
  );
}
