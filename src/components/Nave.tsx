'use client'
import React from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import { RiMenu3Fill } from 'react-icons/ri';
import Image from 'next/image';
import Logo from "@/assets/logoFour.png";
import { useState } from 'react';
type Props = {
    title:string;
    className?:string;
}

const Nave = ({title,className}:Props) => {
    const [show, setShow] = useState(false);
  return (
    <div>
         <div
              onClick={() => setShow(!show)}
              className=" md:hidden bg-[#343a40;] px-3 py-2 text-2xl text-white w-full justify-between flex items-center fixed h-16 z-30 "
            >
              <h1 className={`${className}`}>{title}</h1>{show ? <AiOutlineClose /> : <RiMenu3Fill  />}
            </div>
    </div>
  )
}

export default Nave