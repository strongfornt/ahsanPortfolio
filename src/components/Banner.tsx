"use client";
import React from "react";
import Container from "./Container";
import { Typewriter } from "react-simple-typewriter";

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
      <div className="fixed right-5 bottom-7 hidden md:flex gap-4 flex-col">
        {social.map((item)=>(
          <span key={item?.icon} className="text-white/80 hover:text-[#ffb400] duration-300 cursor-pointer ">{<item.icon className='text-2xl space-y-7 '/>}</span>
        ))}
      </div>
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
