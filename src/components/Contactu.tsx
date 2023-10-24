
// 'use client'
// import { sidebar } from '@/constants/data'

// import Link from 'next/link'

// import Container from "@/components/Container";

// import { Contact } from "@/constants/data";
// import React, { ReactElement } from "react";
// import {RiMenu3Fill} from 'react-icons/ri'
// import {AiFillHome} from 'react-icons/ai'
// import {FaUser ,FaEnvelope} from 'react-icons/fa'
// import {RxResume} from 'react-icons/rx'
// import {PiHandbagSimpleFill} from 'react-icons/pi'


// interface Props {
//   title: string;
//   icon: ReactElement;
//   head: string;
//   href:string;
  

// }



// const Contactu = ({href}:Props) => {
//   return (
//    <div>
//     {
//         sidebar.map((item)=>(
            
//             <Link key={item.} >
//                   <div className="z-30  top-40 relative   ">
        
//           <div className="bg-yellow-500 cursor-pointer top-[20%] group duration-300 w-[40px] h-[40px] right-2  fixed  rounded-[100px]  overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center">
//             <AiFillHome  className="group-hover:translate-x-3  rounded-[100px] text-lg   absolute text-white  " />
//             <span className="translate-x-14 text-sm">HOME</span>
//           </div>
        
        
//           <div className="bg-yellow-500 cursor-pointer top-[29%]   group duration-300 w-[40px] h-[40px] right-2  fixed  rounded-[100px]  overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center">
//             <FaUser className="group-hover:translate-x-3  rounded-[100px] text-lg   absolute text-white  " />
//             <span className="translate-x-14 text-sm">ABOUT</span>
//           </div>
        
        
//           <div className="bg-yellow-500 cursor-pointer top-[38%]  group duration-300 w-[40px] h-[40px] right-2  fixed  rounded-[100px] overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center">
//             <RxResume className="group-hover:translate-x-3  rounded-[100px] text-lg   absolute   " />
//             <span className="translate-x-14 text-sm"> RESUME</span>
//           </div>
        
        
//           <div className="bg-yellow-500 cursor-pointer top-[47%]  group duration-300 w-[40px] h-[40px] right-2  fixed  rounded-[100px] overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center">
//             <PiHandbagSimpleFill className="group-hover:translate-x-3  rounded-[100px] text-lg   absolute text-white  " />
//             <span className="translate-x-16 group-hover:translate-x-12 text-sm">
//               {" "}
//               PORTFOLIO
//             </span>
//           </div>
//           <div className="bg-yellow-500 cursor-pointer top-[56%]  group duration-300 w-[40px] h-[40px] right-2  fixed  rounded-[100px] overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center">
//             <FaEnvelope className="group-hover:translate-x-3  rounded-[100px] text-lg   absolute text-white  " />
//             <span className="translate-x-14 text-sm"> CONTACT</span>
//           </div>
//           </div>
        
//             </Link>
//         ))
//     }
//    </div>
// )} 

// export default Contactu