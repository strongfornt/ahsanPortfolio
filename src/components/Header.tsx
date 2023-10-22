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
const Header = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div className=" w-full h-16">
  
      
  
      <Container className={"h-16 "}>
        <div className=" h-20 md:h-full flex items-center justify-between px-6 md:px-0 relative">
          <div>
            <Image src={Logo} alt="logo" className="h-32 w-32" />
          </div>
          <div>
            <ul className=" hidden md:flex items-center uppercase gap-7 text-sm font-semibold text-white">
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
            <div
              onClick={() => setShow(!show)}
              className="inline-flex md:hidden bg-slate-600/70 px-3 py-2 text-2xl text-white"
            >
              {show ? <AiOutlineClose /> : <RiMenu3Fill />}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
