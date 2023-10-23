"use client";
import React from "react";
import Container from "./Container";
import { Typewriter } from "react-simple-typewriter";
import {
  AiFillTwitterCircle,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import {PiInstagramLogoLight} from 'react-icons/pi'

import { social } from "@/constants/data";

const Banner = () => {
  const typing = [
    "Professional Web Developer",
    "Professional Web Designer",
    "Mern stack Developer",
    "Professional Photographer",
  ];
  return (
    <div >
      <div className="text-white fixed right-4 bottom-4 ">
      <ul className="  space-y-5   hidden md:flex flex-col  ">
          <li className=" text-md flex items-center justify-center bg-white text-[#3B5998] hover:text-white hover:bg-[#3B5998] duration-300 rounded-full h-6 w-6 cursor-pointer relative overflow-hidden hover:overflow-visible  hover:transition-all  ">
            <FaFacebookF />
            <span className="-translate-x-[100%] inline-flex absolute -translate-y-[1px] -left-3 bg-[#3B5998] text-white py-1 px-2 text-sm font-serif  rounded">
              <span className="h-[10px] w-[10px] inline-flex bg-[#3B5998]  absolute -right-[5px] rotate-45"/>
              
              Facebook</span>
            
          </li>

          <li className="  text-md flex items-center justify-center duration-300  text-[#46C1F6] hover:text-white hover:bg-[#46C1F6] bg-white rounded-full h-6 w-6  cursor-pointer relative overflow-hidden hover:overflow-visible">
            <AiOutlineTwitter/>
            <span className="-translate-x-[100%] inline-flex absolute -translate-y-[1px] -left-3 bg-[#46C1F6]  text-white py-1 px-2 text-sm font-serif rounded">
              <span className="h-[10px] w-[10px] inline-flex bg-[#46C1F6] absolute -right-[5px] rotate-45"/>
              
              Twitter</span>
          </li>
          <li className="  text-md flex items-center justify-center duration-300 hover:text-white  text-[#e1306c] bg-white hover:bg-[#e1306c] rounded-full h-6 w-6  cursor-pointer relative overflow-hidden hover:overflow-visible ">
            <AiFillInstagram />
            <span className="-translate-x-[100%] inline-flex absolute -translate-y-[1px] -left-3 bg-[#e1306c] text-white py-1 px-2 text-sm font-serif rounded">
              <span className="h-[10px] w-[10px] inline-flex bg-[#e1306c] absolute -right-[5px] rotate-45"/>
              
              Instagram</span>
          </li>
          <li className="  text-md flex items-center justify-center duration-300 hover:text-white hover:bg-[#333] text-[#333] bg-white rounded-full h-6 w-6  relative cursor-pointer overflow-hidden hover:overflow-visible">
            <AiFillGithub />
            <span className="-translate-x-[100%] inline-flex absolute -translate-y-[1px] -left-3 bg-[#333]  text-white py-1 px-2 text-sm font-serif rounded">
              <span className="h-[10px] w-[10px] inline-flex bg-[#333] absolute -right-[5px] rotate-45"/>
              
              Github</span>
          </li>
        </ul>
      </div>
      {/* <div className="fixed right-5 bottom-7 hidden md:flex gap-4 flex-col ">
        {social.map((item)=>(
          <span key={item?.icon} className="text-white/80 hover:text-[#ffb400] duration-300 cursor-pointer ">{<item.icon className='text-2xl space-y-7 '/>}</span>
        ))}
      </div> */}
      <Container className={"h-screen w-1/2 "}>
        <div className="flex flex-col  items-center justify-center text-white/70 h-4/6 gap-9 ">
          <div className=" w-80">
            <p className=" text-sm font-thin flex items-center justify-center md:justify-start">Hey! There,</p>

            <p className=" font-serif flex gap-2  text-2xl font-semibold justify-center md:justify-start">
              I&apos;m <h1 className="font-mono">Ahsan Ullah</h1>
            </p>

            <div className="flex items-center gap-3">
              <p className="text-3xl  font-sans  gap-2  ">A</p>
              <p className="text-teal-500 font-mono text-lg -z-1">
                <Typewriter
                  words={typing}
                  loop={100}
                  cursor
                  cursorColor="black"
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                  cursorBlinking

                  // onLoopDone={handleDone}
                  // onType={handleType}
                />
              </p>
            </div>
            <div className="flex items-center justify-center mt-9">
              <button className="border font-semibold font-mono border-[#ffb400] w-32 p-2 rounded-full text-[#ffb400] hover:text-white/80 hover:bg-[#ffb400]  uppercase text-lg   duration-300">
                Hire Me 
              </button>
            </div>
          </div>
        </div>
        
      </Container>
    </div>
  );
};

export default Banner;
