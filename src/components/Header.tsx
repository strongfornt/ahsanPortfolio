"use client";
import React from "react";
import Container from "./Container";
import Link from "next/link";
import { navigation, sidebar } from "@/constants/data";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Logo from "@/assets/logoFour.png";
import { useState } from "react";
import { motion } from "framer-motion"
import { FaHome,FaUser,FaEnvelope } from "react-icons/fa";
import {MdNoteAlt} from "react-icons/md"
import {BiSolidShoppingBagAlt} from "react-icons/bi"

import { usePathname } from "next/navigation";
import Nave from "./Nave";
const Header = () => {
  const [show, setShow] = useState(false);
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className=" w-full relative  ">
       <div className="z-30 hidden md:flex   top-40   ">
        <Link href={"/"}>
          <div className="bg-yellow-500 cursor-pointer top-[27%] group duration-300 w-[40px] h-[40px] right-2 fixed  rounded-[100px]  overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center">
            <FaHome className="group-hover:translate-x-3  rounded-[100px] text-lg   absolute text-white  " />
            <span className="translate-x-14 text-sm">HOME</span>
          </div>
        </Link>
        <Link href={"/aboutme"}>
          <div className="bg-yellow-500 cursor-pointer top-[36%]  group duration-300 w-[40px] h-[40px] right-2  fixed  rounded-[100px]  overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center">
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
          <div className="bg-yellow-500 cursor-pointer top-[54%]  group duration-300 w-[40px] h-[40px] right-2  fixed  rounded-[100px] overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center">
            <BiSolidShoppingBagAlt className="group-hover:translate-x-3  rounded-[100px] text-lg   absolute text-white  " />
            <span className="translate-x-16 group-hover:translate-x-12 text-sm">
              {" "}
              PORTFOLIO
            </span>
          </div>
        </Link>

        <Link href={"/contact"}>
          <div className="bg-yellow-500 cursor-pointer top-[63%]  group duration-300 w-[40px] h-[40px] right-2  fixed  rounded-[100px] overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center">
            <FaEnvelope className="group-hover:translate-x-3  rounded-[100px] text-lg   absolute text-white  " />
            <span className="translate-x-14 text-sm"> CONTACT</span>
          </div>
        </Link>
      </div>
      {/* responsive menu from here */}
      <div
        onClick={() => setShow(!show)}
        className=" md:hidden  px-3 py-2 text-2xl text-white   justify-between flex items-center fixed h-16 z-50 "
      >
         {!show && <Image src={Logo} alt="logo" className="h-32 w-32" />} 
        <div className="fixed right-4 bg-[#343a40;] p-2">
          {" "}
          {show ? <AiOutlineClose /> : <RiMenu3Fill />}
        </div>
      </div>
      {show && (
        <motion.ul 
        initial={{x:-40,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:0.2}}
        className="md:hidden flex flex-col max-w-full top-0  items-start bg-[#343a40] px-4 w-full font-sans text-lg gap-2 text-md font-semibold uppercase fixed z-30">
          <li className="w-full h-16 flex "></li>
          {sidebar.map((item) => (
            <Link key={item?.title} href={item?.href}>
              <div
                className={`flex items-center gap-3 text-white ${
                  pathName === item.href && "text-yellow-500"
                }`}
              >
                <li className="">{<item.icon />}</li>

                <li className="hover:text-slate-400 relative group overflow-hidden   ">
                  {item?.title}
                </li>
              </div>

              <span className="h-[2px] w-[29rem] inline-flex bg-gray-500/20" />
            </Link>
          ))}
        </motion.ul>
      )}

      <Container className={"h-16 "}>
        
        <div className=" h-20 md:h-full flex items-center justify-between px-6 md:px-0 relative ">
          <div className=" ">
            <Image src={Logo} alt="logo" className="h-32 w-32 hidden md:flex" />
          </div>
          {/* <div>
            <ul className=" hidden md:flex items-center font-sans gap-7 text-md font-semibold text-white ">
              {navigation.map((item) => (
                <Link key={item?.title} href={item?.href}>
                  <li className="hover:text-slate-400 relative group overflow-hidden  ">
                    {item?.title}
                    <span
                      className="h-[2px]  w-full inline-flex bg-red-700 absolute -translate-x-[105%] left-0 translate-y-3.5  font-semibold
                  
                  transition-transform group-hover:translate-x-0 duration-300"
                    />
                  </li>
                </Link>
              ))}
            </ul>{" "}
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Header;
