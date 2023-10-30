import Container from "@/components/Container";
import Link from "next/link";
import { Contact } from "@/constants/data";
import React, { ReactElement } from "react";
import {RiMenu3Fill} from 'react-icons/ri'
import {AiFillHome} from 'react-icons/ai'
import {FaUser ,FaEnvelope,FaHome} from 'react-icons/fa'
import {RxResume} from 'react-icons/rx'
import {PiHandbagSimpleFill} from 'react-icons/pi'
import Forcontact from "@/components/Forcontact";
import {MdNoteAlt} from 'react-icons/md'
import {BiSolidShoppingBagAlt} from 'react-icons/bi'


interface props {
  title: string;
  icon: ReactElement;
  head: string;
}

const page = () => {
  return (
    <div>
       <div className="z-30 hidden md:flex top-40 relative   ">
        <Link href={"/"}>
          <div className="bg-yellow-500 cursor-pointer top-[27%] group duration-300 w-[40px] h-[40px] right-2  fixed  rounded-[100px]  overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center">
            <FaHome className="group-hover:translate-x-3  rounded-[100px] text-lg   absolute text-white  " />
            <span className="translate-x-14 text-sm">HOME</span>
          </div>
        </Link>
        <Link href={"/aboutme"}>
          <div className="bg-yellow-500 cursor-pointer top-[36%]   group duration-300 w-[40px] h-[40px] right-2  fixed  rounded-[100px]  overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center">
            <FaUser className="group-hover:translate-x-3  rounded-[100px] text-lg   absolute text-white  " />
            <span className="translate-x-14 text-sm">ABOUT</span>
          </div>
        </Link>
        <Link href={"/services"}>
          <div className="bg-yellow-500 cursor-pointer top-[45%]  group duration-300 w-[40px] h-[40px] right-2  fixed  rounded-[100px] overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center">
            <MdNoteAlt className="group-hover:translate-x-3  rounded-[100px] text-lg   absolute   " />
            <span className="translate-x-14 text-sm"> RESUME</span>
          </div>
        </Link>
        <Link href={"/portfolio"}>
          <div className="bg-[#ffb400] cursor-pointer top-[54%]  group duration-300 w-[40px] h-[40px] right-2  fixed  rounded-[100px] overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center">
            <BiSolidShoppingBagAlt className="group-hover:translate-x-3  rounded-[100px] text-lg   absolute text-white  " />
            <span className="translate-x-16 group-hover:translate-x-12 text-sm">
              {" "}
              PORTFOLIO
            </span>
          </div>
        </Link>

        <Link href={"/contact"}>
          <div className="bg-[#ffb400]  cursor-pointer top-[63%]  group duration-300 w-[40px] h-[40px] right-2  fixed  rounded-[100px] overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center">
            <FaEnvelope className="group-hover:translate-x-3  rounded-[100px] text-lg   absolute text-white  " />
            <span className="translate-x-14 text-sm"> CONTACT</span>
          </div>
        </Link>
      </div>
      <Container className=" place-items-start md:place-items-center relative">
        <Forcontact/>
        {/* <header className="md:hidden flex items-center justify-between text-white bg-[#343a40;] h-16 fixed w-full px-7 md:px-o  ">
        <p className="text-white/90 text-3xl  font-bold font-sans   flex gap-2">
              GET IN <p className="text-[#ffb400]">TOUCH</p>
            </p>
            <p><RiMenu3Fill/></p>
        </header> */}
        <div className="w-full h-0 md:h-20 relative flex items-center"></div>
        <div className=" hidden md:flex items-center justify-center  ">
          <p className= " md:text-white/10 text-8xl font-bold  tracking-[15px]  translate-x-[25%] ">
            CONTACT
          </p>
          <div className="flex items-center justify-center flex-col -translate-x-[95%]">
            <p className="text-white/90 text-5xl  font-bold font-sans mt-3 mb-3 flex gap-2">
              GET IN <p className="text-[#ffb400]">TOUCH</p>
            </p>
            <span className="h-[3px] w-16 bg-[#ffb400] inline-flex   " />
          </div>
        </div>
        <div className="flex-row md:flex gap-16 px-7 md:px-0 mt-20 md:mt-16 ">
          <div className="text-white/80  ">
            <div className="text-white w-72 ">
              <p className="text-2xl font-semibold font-sans mb-3">
                DON&apos;T BE SHY!
              </p>
              <p className="text-sm font-sans text-white/80 mb-5">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
              <span className="h-[2px] w-full inline-flex bg-[#ffb400] mb-8" />
            </div>
           <div className="">
           {Contact.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-6 p-3 mb-4  w-72 rounded-md text-sm bg-gray-500/10"
              >
                <p className="text-[#ffb400] text-lg">{<item.icon />}</p>
                <p className="font-sans text-white/80">{item.title}</p>
                
              </div>
            ))}
           </div>
          </div>
          <div className=" mt-12  ">
            <form className="space-y-7 md:-space-y-7">
              <div className="grid grid-rows-2 gap-y-7 md:gap-x-7 md:grid-cols-2">
                <div className="text-white">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full md:w-[22rem] rounded-xl md:rounded-md ring-1 ring-gray-200/40 px-4 py-2 outline-none bg-gray-500/10 focus:right-2 focus:ring-[#ffb400]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full md:w-[22rem]  rounded-xl md:rounded-md ring-1 ring-gray-200/40 px-4 py-2 outline-none bg-gray-500/10 focus:right-2 focus:ring-[#ffb400]"
                />
              </div>
              </div>

              <div className="w-full  ">
                <textarea
                rows={6}
                cols={9}
                  
                  placeholder="Message"
                  className=" rounded-lg md:rounded-md ring-1 ring-gray-200/40 px-4 py-2 outline-none bg-gray-500/10 focus:right-2 focus:ring-[#ffb400] w-full"
                />
                 <button className="inline-block self-end text-[#ffb400] text-lg font-semibold rounded-lg px-6 py-2 uppercase hover:bg-[#ffb400] hover:text-white border border-[#ffb400]
               duration-300 mt-5 mb-5
              ">

                send message

              </button>
              </div>
             
              
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
