import Container from "@/components/Container";
import { Service } from "@/constants/data";
import React from "react";
import { ReactElement } from "react";
import { backhome } from "@/constants/data";
import Link from "next/link";
import {ImArrowRight} from 'react-icons/im'
import {PiDownloadBold} from 'react-icons/pi'
import { RiMenu3Fill } from "react-icons/ri";
interface Props {
  title: string;
  description: string;
  icon: ReactElement;
}

const page = () => {
  return (
    <div className="relative ">
      {backhome.map((item) => (
        <Link key={item.title} href={item?.href}>
          <div className="fixed bg-slate-300 w-12 h-9 text-2xl mt-60 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-slate-100 duration-300 ">
            {<item.title className="animate-bounce" />}
          </div>
        </Link>
      ))}
      <Container className="">
        <header className="md:hidden flex items-center justify-between text-white bg-gray-500 h-16 fixed w-full px-7 md:px-o z-50 ">
        <p className="text-white/90 text-3xl  font-bold font-sans   flex ">
              RESU <p className="text-[#ffb400]">ME</p>
            </p>
            <p><RiMenu3Fill/></p>
        </header>
      <div className="w-full md:h-20 relative flex items-center"></div>
        <div className="hidden  md:flex items-center justify-center">
          <p className="text-white/10 text-9xl font-bold translate-x-[12%]">
            SUMMARY
          </p>
          <div className="flex items-center justify-center flex-col -translate-x-[150%]">
          <p className="text-white/90 text-6xl font-bold font-sans mt-3 mb-3">
              RESUME
            </p>
            <span className="h-[3px] w-16 bg-[#ffb400] inline-flex   " />
          </div>
          
        </div>
          <div className="grid px-7 md:px-0 grid-rows-1 md:grid-cols-2 gap-20 mt-14 mb-20 md:mb-0 "> 
            <div className="text-white/90  ">
                    
                  <p className="mb-5 font-semibold font-sans text-3xl">My Education</p>
                  <div className="bg-gray-500/10 border-l-[#ffb400] border-l-2 rounded-r-md p-12 space-y-2 border border-gray-500/10 border-b-gray-500 relative  ">
                  <span className="absolute left-0 mt-4 text-[#ffb400] text-2xl"><ImArrowRight/></span>
                    <p className="font-semibold font-sans text-2xl">Computer Science</p>
                    <p className="text-sm text-teal-500 font-sans">Barishal Polytechnic Institute / 2020-2023</p>
                    <p className="text-sm text-white/80 font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores neque reprehenderit corrupti!</p>

                  </div>
                  <div  className="bg-gray-500/10 relative border-l-[#ffb400] border-l-2 rounded-r-md p-12 space-y-2 border  border-gray-500/10 border-b-gray-500 ">
                  <span className="absolute left-0 mt-4 text-[#ffb400] text-2xl"><ImArrowRight/></span>
                    <p className="font-semibold font-sans text-2xl">H.S.C</p>
                    <p className="text-sm text-teal-500 font-sans">Akota Degree College / 2021-2022 </p>
                    <p className="text-sm text-white/80 font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores neque reprehenderit corrupti!</p>
                  </div>
                  <div  className="bg-gray-500/10 relative border-l-[#ffb400] border-l-2 rounded-r-md p-12 space-y-2 border border-gray-500/10  ">
                  <span className="absolute left-0 mt-4 text-[#ffb400] text-2xl"><ImArrowRight/></span>
                    <p className="font-semibold font-sans text-2xl">S.S.C</p>
                    <p  className="text-sm text-teal-500 font-sans">Udoypur Maddhomik School</p>
                    <p  className="text-sm text-white/80 font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores neque reprehenderit corrupti!</p>
                  </div>
            </div>
            <div  className="text-white/90  ">
            <p className="mb-5 font-semibold font-sans text-3xl">My Exprience</p> 
                  <div className="bg-gray-500/10 relative border-l-[#ffb400] border-l-2 rounded-r-md p-12 space-y-2 border border-gray-500/10 border-b-gray-500 ">
                  <span className="absolute left-0 mt-4 text-[#ffb400] text-2xl"><ImArrowRight/></span>
                    <p className="font-semibold font-sans text-2xl">Web Developer</p>
                    <p className="text-sm text-teal-500 font-sans">PepoleNTech / 2022-2023</p>
                    <p className="text-sm text-white/80 font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores neque reprehenderit corrupti!</p>

                  </div>
                  <div  className="bg-gray-500/10 relative border-l-[#ffb400] border-l-2 rounded-r-md p-12 space-y-2 border border-gray-500/10 border-b-gray-500 ">
                  <span className="absolute left-0 mt-4 text-[#ffb400] text-2xl"><ImArrowRight/></span>
                    <p className="font-semibold font-sans text-2xl">Web Designer</p>
                    <p className="text-sm text-teal-500 font-sans">PeopleNTech / 2022-2023 </p>
                    <p className="text-sm text-white/80 font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores neque reprehenderit corrupti!</p>
                  </div>
                  <div  className="bg-gray-500/10  relative border-l-[#ffb400] border-l-2 rounded-r-md p-12 space-y-2 border border-gray-500/10   ">
                  <span className="absolute left-0 mt-4 text-[#ffb400] text-2xl"><ImArrowRight/></span>
                    <p className="font-semibold font-sans text-2xl">Logo Designer</p>
                    <p  className="text-sm text-teal-500 font-sans">Discord / 2020-2021</p>
                    <p className="text-sm text-white/80 font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores neque reprehenderit corrupti!</p>
                  </div>

            </div>
            
          </div>
          <div className="flex items-center justify-center my-10">
              <button className=" text-[#ffb400] hover:text-white hover:bg-[#ffb400] duration-300 p-3 w-56 rounded-full  border border-[#ffb400] flex items-center justify-center gap-2
              uppercase text-lg font-semibold
              ">Download CV <PiDownloadBold/></button>
              
            </div>
      </Container>
    </div>
  );
};

export default page;
