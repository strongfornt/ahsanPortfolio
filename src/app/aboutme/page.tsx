import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import { Service } from "@/constants/data";
import { ReactElement } from "react";

import Ahsan from "@/assets/ahsan.jpg";
import Link from "next/link";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { SiFacebook } from "react-icons/si";
import { backhome } from "@/constants/data";
interface Props {
  title: string;
  description: string;
  icon: ReactElement;
}

const page = () => {
  return (
    <div className="relative">
      {backhome.map((item) => (
        <Link key={item.title} href={item?.href}>
          <div className="fixed bg-slate-300 w-12 h-9 text-2xl mt-60 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-slate-100 duration-300 ">
            {<item.title className="animate-bounce" />}
          </div>
        </Link>
      ))}
      <Container>
        <div className="w-full h-20 relative flex items-center"></div>

        <div className="text-white items-center justify-center flex flex-col gap-4">
          <p className="text-slate-300 text-sm font-thin">Get to know me</p>
          <p className="text-white/90 text-4xl font-semibold font-sans">
            {" "}
            ABOUT ME
          </p>
          <span className="h-[3px] w-16 bg-[#ffb400] inline-flex mt-5 " />
        </div>

        <div className="flex mt-12 flex-col sm:flex-row p-0 sm:p-5 ">
          <div className="w-1/2 ">
            <Image
            priority
              src={Ahsan}
              alt="the person"
              className="h-[400px] w-[370px] object-contain "
            />
          </div>
          <div className="text-white mt-5 w-3/4 ">
            <p className="text-[#ffb400] text-xl font-serif">Who am i ?</p>
            <p className="text-4xl mt-3 font-sans font-semibold">
              I&apos;m Ahsan Ullah,a video Game lover and react Learner.
            </p>
            <p className="mt-6 font-serif">
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
            <div className=" flex items-center justify-start gap-28 mt-8">
              <div className="space-y-3">
                <p className="font-serif">Name : Ahsanullah Mubin</p>
                <p className="font-serif">Email : aktershoaib574@gmail.com</p>
              </div>
              <div className="space-y-3">
                <p className="font-serif">Age : 20</p>
                <p className="font-serif">From : Barishal,Bangladesh</p>
              </div>
            </div>
            <div className="mt-5 mb-5 flex items-center justify-start flex-col sm:flex-row space-y-5 space-x-5">
              <a href="/resume.pdf">
                {" "}
                <button
                  className="border text-[#ffb400] hover:text-white border-[#ffb400] hover:bg-[#ffb400] w-32 p-2 flex items-center justify-center rounded-full font-mono  duration-300
              
               cursor-pointer mt-4
              "
                >
                  Follow
                </button>
              </a>
              <span className="h-[2px] w-14 bg-white inline-flex" />
              <ul className=" flex items-center justify-between gap-5   ">
                <li className="  text-2xl text-white cursor-pointer ">
                  <SiFacebook />
                </li>

                <li className=" text-2xl text-white py-2 cursor-pointer">
                  <AiFillLinkedin className="rounded-full" />
                </li>
                <li className=" text-2xl text-white py-3 cursor-pointer">
                  <AiOutlineGithub />
                </li>
                <li className=" text-2xl text-white py-3 cursor-pointer">
                  <AiFillInstagram />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-20 relative flex items-center"></div>
        <div className="flex items-center justify-center flex-col gap-3">
          <p className="text-slate-300 text-sm font-thin">
            Services i offer to my clients
          </p>
          <p className="text-white/90 text-4xl font-semibold font-sans">
            My Services
          </p>

          <span className="h-[3px] w-16 inline-flex bg-[#ffb400] mt-5" />
        </div>
        <div className="grid grid-cols-3 gap-10 mt-12 p-10">
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
