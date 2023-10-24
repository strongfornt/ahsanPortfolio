"use client";
import React from "react";
import Container from "./Container";
import Link from "next/link";
import { navigation } from "@/constants/data";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Logo from "@/assets/logoFour.png";
import { useState } from "react";
import Nave from "./Nave";
const Header = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div className=" w-full ">
      

  
        <div
              onClick={() => setShow(!show)}
              className=" md:hidden bg-slate-500/70 px-3 py-2 text-2xl text-white w-full justify-between flex items-center fixed h-16 z-30 "
            >
              <Image src={Logo} alt="logo" className="h-32 w-32" />{show ? <AiOutlineClose /> : <RiMenu3Fill  />}
            </div> 
  
      <Container className={"h-16 "}>
        <div className=" h-20 md:h-full flex items-center justify-between px-6 md:px-0 relative ">
          <div className=" ">
          <Image src={Logo} alt="logo" className="h-32 w-32 hidden md:flex" />
            
          </div>
          <div>
            <ul className=" hidden md:flex items-center font-sans gap-7 text-md font-semibold text-white ">
              {navigation.map((item) => (
                <Link key={item?.title} href={item?.href}>
                  <li className="hover:text-slate-400 relative group overflow-hidden  ">
                    {item?.title}
                    <span
                      className="h-[2px]  w-full inline-flex bg-black absolute -translate-x-[100%] left-0 bottom-1.5 font-semibold
                  
                  transition-transform group-hover:translate-x-0 duration-300"
                    />
                  </li>
                </Link>
              ))}
            </ul>{" "}
           
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
