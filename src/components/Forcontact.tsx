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

import { usePathname } from "next/navigation";

const Forcontact = () => {
    const [show, setShow] = useState(false);
    const pathName = usePathname();
    console.log(pathName);
  return (
    <div>
         <div
        onClick={() => setShow(!show)}
        className=" md:hidden bg-[#343a40;] px-3 py-2 text-2xl text-white w-full justify-between flex items-center fixed h-16 z-50 "
      >
        {!show && <h1 className="text-2xl font-bold font-sans">ABOUT<span className="text-[#ffc107;] "> ME</span></h1>}
        <div className="fixed right-4">
          {" "}
          {show ? <AiOutlineClose /> : <RiMenu3Fill />}
        </div>
      </div>
      {show && (
        <ul className=" flex flex-col max-w-full top-0  items-start bg-[#343a40;] px-4 w-full font-sans text-lg gap-2 text-md font-semibold uppercase fixed z-30">
          <li className="w-full h-16 flex "></li>
          {sidebar.map((item) => (
            <Link key={item?.title} href={item?.href}>
              <div
                className={`flex items-center gap-3 text-white ${
                  pathName === item.href && "text-[#ffc107;]"
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
        </ul>
      )}
    </div>
  )
}

export default Forcontact