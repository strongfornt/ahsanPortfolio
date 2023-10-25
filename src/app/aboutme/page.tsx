import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import { Service } from "@/constants/data";
import { ReactElement } from "react";

import Ahsan from "@/assets/ahsan.jpg";
import Link from "next/link";
import {
  AiFillTwitterCircle,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillGithub,
  AiFillInstagram,
  AiFillHome,
} from "react-icons/ai";

import { FaFacebookF ,FaUser ,FaEnvelope } from "react-icons/fa";
import {PiInstagramLogoLight ,PiHandbagSimpleFill} from 'react-icons/pi';
import {RxResume} from 'react-icons/rx'
import { backhome } from "@/constants/data";
import Forcontact from "@/components/Forcontact";
interface Props {
  title: string;
  description: string;
  icon: ReactElement;
}

const page = () => {
  return (
    <div className="relative">
      <div className="z-30 hidden md:flex   top-40 relative   ">
        <Link href={"/"}>
          <div className="bg-yellow-500 cursor-pointer top-[20%] group duration-300 w-[40px] h-[40px] right-2  fixed  rounded-[100px]  overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center">
            <AiFillHome className="group-hover:translate-x-3  rounded-[100px] text-lg   absolute text-white  " />
            <span className="translate-x-14 text-sm">HOME</span>
          </div>
        </Link>
        <Link href={"/aboutme"}>
          <div className="bg-yellow-500 cursor-pointer top-[29%]  group duration-300 w-[40px] h-[40px] right-2  fixed  rounded-[100px]  overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center">
            <FaUser className="group-hover:translate-x-3  rounded-[100px] text-lg   absolute text-white  " />
            <span className="translate-x-14 text-sm">ABOUT</span>
          </div>
        </Link>
        <Link href={"/services"}>
          <div className="bg-yellow-500 cursor-pointer top-[38%]  group duration-300 w-[40px] h-[40px] right-2  fixed  rounded-[100px] overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center">
            <RxResume className="group-hover:translate-x-3  rounded-[100px] text-lg   absolute   " />
            <span className="translate-x-14 text-sm"> RESUME</span>
          </div>
        </Link>
        <Link href={"/portfolio"}>
          <div className="bg-yellow-500 cursor-pointer top-[47%]  group duration-300 w-[40px] h-[40px] right-2  fixed  rounded-[100px] overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center">
            <PiHandbagSimpleFill className="group-hover:translate-x-3  rounded-[100px] text-lg   absolute text-white  " />
            <span className="translate-x-16 group-hover:translate-x-12 text-sm">
              {" "}
              PORTFOLIO
            </span>
          </div>
        </Link>

        <Link href={"/contact"}>
          <div className="bg-yellow-500 cursor-pointer top-[56%]  group duration-300 w-[40px] h-[40px] right-2  fixed  rounded-[100px] overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center">
            <FaEnvelope className="group-hover:translate-x-3  rounded-[100px] text-lg   absolute text-white  " />
            <span className="translate-x-14 text-sm"> CONTACT</span>
          </div>
        </Link>
      </div>
      {/* {backhome.map((item) => (
        <Link key={item.title} href={item?.href}>
          <div className="fixed bg-slate-300 w-12 h-9 text-2xl mt-60 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-slate-100 duration-300 ">
            {<item.title className="animate-bounce" />}
          </div>
        </Link>
      ))} */}
      <Container>
        <Forcontact/>
        <div className="w-full h-20 relative flex items-center"></div>

        <div className="text-white items-center justify-center flex flex-col gap-4">
          <p className="text-white/80 text-sm font-thin">Get to know me</p>
          <p className="text-white text-4xl font-bold font-sans hidden md:flex">
            {" "}
            ABOUT <span className="text-[#ffc107;]"> ME</span> 
          </p>
          <span className="h-[3px] w-16 bg-[#ffb400] inline-flex mt-5 " />
        </div>

        <div className=" flex-col md:flex md:flex-row mt-12  p-0 sm:p-5 ">
          <div className="w-full md:w-1/2 relative ">
            <Image
            priority
              src={Ahsan}
              alt="the person"
              className="md:left-0 h-[180px] w-[180px] md:h-[400px]  md:w-[370px] object-contain bg-cover rounded-full md:rounded-none sticky left-[31%] sm:left-[36%]"
            />
          </div>
          <div className="text-white mt-5 w-full md:w-3/4 px-5 md:px-0 ">
            <p className="text-[#ffb400] text-xl font-serif">Who am i <span className=" text-3xl">?</span></p>
            <p className="text-2xl md:text-4xl mt-3 font-sans font-semibold">
              I&apos;m Ahsan Ullah,a video Game lover and react Learner.
            </p>
            <p className="mt-6 font-sans text-md text-white/80">
              Basically i like to play video game in my free time.On the other
              hand i also like to do coding.So i can do it with fun. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Iure, dicta! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
              consequuntur. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Dicta et quaerat sed repudiandae dolore exercitationem dolor
              illo, dolorem molestiae vel nisi doloribus quisquam. Architecto
              nobis laudantium officiis aspernatur, libero excepturi!
            </p>
            <span className="h-[1px] w-full bg-slate-600 inline-flex" />
            <div className=" flex-col md:flex md:flex-row items-center justify-start gap-28 mt-8">
              <div className="space-y-3">
                <p className="">Name : <span className="text-sm text-white/80">Ahsanullah Mubin</span></p>
                <p className="">Email : <span className="text-sm text-white/80">aktershoaib574@gmail.com</span></p>
              </div>
              <div className="space-y-3 mt-3 md:mt-0">
                <p className="">Age : <span className="text-sm text-white/80">20</span></p>
                <p className="">From : <span className="text-sm text-white/80">Barishal,Bangladesh</span></p>
              </div>
            </div>
            <div className="mt-5 mb-5 flex items-center justify-start flex-col md:flex-row  space-y-5 space-x-5">
              <a href="/resume.pdf">
                {" "}
                <button
                  className="border ms-6 md:ms-0 text-[#ffb400] hover:text-white border-[#ffb400] hover:bg-[#ffb400] w-32 p-2 flex items-center justify-center rounded-full font-mono  duration-300
              
               cursor-pointer mt-4
              "
                >
                  Follow
                </button>
              </a>
              <span className="h-[2px] w-14 bg-white inline-flex" />
              <ul className="  flex  gap-4 ">
          <li className=" text-md flex items-center justify-center bg-white text-[#3B5998] hover:text-white hover:bg-[#3B5998] duration-300 rounded-full h-6 w-6 cursor-pointer relative overflow-hidden hover:overflow-visible  hover:transition-all  ">
            <FaFacebookF />
            <span className="-translate-y-[100%] inline-flex absolute -top-3 bg-[#3B5998] text-white py-1 px-2 text-sm font-serif  rounded">
              <span className="h-[10px] w-[10px] inline-flex bg-[#3B5998]   absolute top-[23px] left-[44%] rotate-45"/>
              
              Facebook</span>
            
          </li>

          <li className="  text-md flex items-center justify-center duration-300  text-[#46C1F6] hover:text-white hover:bg-[#46C1F6] bg-white rounded-full h-6 w-6  cursor-pointer relative overflow-hidden hover:overflow-visible">
            <AiOutlineTwitter/>
            <span className="-translate-y-[100%] inline-flex absolute  -top-3 bg-[#46C1F6]  text-white py-1 px-2 text-sm font-serif rounded">
              <span className="h-[10px] w-[10px] inline-flex bg-[#46C1F6] absolute top-[23px] left-[44%] rotate-45"/>
              
              Twitter</span>
          </li>
          <li className="  text-md flex items-center justify-center duration-300 hover:text-white  text-[#e1306c] bg-white hover:bg-[#e1306c] rounded-full h-6 w-6  cursor-pointer relative overflow-hidden hover:overflow-visible ">
            <AiFillInstagram />
            <span className="-translate-y-[100%] inline-flex absolute  -top-3 bg-[#e1306c] text-white py-1 px-2 text-sm font-serif rounded">
              <span className="h-[10px] w-[10px] inline-flex bg-[#e1306c] absolute top-[23px] left-[44%] rotate-45"/>
              
              Instagram</span>
          </li>
          <li className="  text-md flex items-center justify-center duration-300 hover:text-white hover:bg-[#333] text-[#333] bg-white rounded-full h-6 w-6  relative cursor-pointer overflow-hidden hover:overflow-visible">
            <AiFillGithub />
            <span className="-translate-y-[100%] inline-flex absolute  -top-3 bg-[#333]  text-white py-1 px-2 text-sm font-serif rounded">
              <span className="h-[10px] w-[10px] inline-flex bg-[#333] absolute top-[23px] left-[44%] rotate-45"/>
              
              Github</span>
          </li>
        </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-20 relative flex items-center"></div>
        <div className="flex items-center justify-center flex-col gap-3">
          <p className="text-white/80 text-sm font-thin">
            Services i offer to my clients
          </p>
          <p className="text-white text-4xl font-bold font-sans">
            MY SERVIC<span className="text-[#ffc107;]">ES</span>
          </p>

          <span className="h-[3px] w-16 inline-flex bg-[#ffb400] mt-5" />
        </div>
        <div className="grid md:grid-cols-3 grid-row gap-10 mt-12 p-10 ">
          {Service.map((item) => (
            <div
              key={item?.title}
              className="  bg-[#131313] p-10  rounded-md shadow-md border border-[#131313] border-b-2 hover:border-b-[#ffb400] duration-300
            
            "
            >
              {
                <span className="text-[#ffb400] text-4xl animate-pulse">
                  {<item.icon />}
                </span>
              }
              <p className="text-white text-xl font-sans font-semibold mt-5">
                {item?.title}
              </p>
              <p className="text-sm text-slate-100 font-serif mt-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default page;
