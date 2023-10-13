import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import { FaWindowClose } from "react-icons/fa";
import Ahsan from "@/assets/ahsan.jpg";
import Link from "next/link";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { SiFacebook } from "react-icons/si";


const page = () => {
  return (
    <div>
      <Container>
        <div className="w-full h-16 relative flex items-center">
          <h1 className="fixed right-10 text-2xl bg-white">
            <Link href={"/"}>
              {" "}
              <FaWindowClose
                className="  cursor-pointer hover:bg-black hover:text-white duration-300
          
          "
              />
            </Link>
          </h1>
        </div>

        <div className="text-white items-center justify-center flex flex-col gap-4">
          <p className="font-serif">Get to know me</p>
          <p className="text-4xl font-semibold font-sans"> ABOUT ME</p>
          <span className="h-[2px] w-10 bg-blue-500 inline-flex " />
        </div>

        <div className=" grid grid-cols-2 mt-20">
          <div className="w-4/5">
            {" "}
            <Image
              src={Ahsan}
              alt="the person"
              className="h-96 w-96 object-fill bg-cover "
            />
          </div>
          <div className="text-white mt-5 w-[100%]  ">
            <h1 className="text-green-500 text-xl font-serif">Who am i ?</h1>
            <p className="text-4xl mt-3 font-sans font-semibold">
              I'm Ahsan Ullah,a video Game lover and react Learner.
            </p>
            <p className="mt-6 font-serif">
              Basically i like to play video game in my free time.On the other
              hand i also like to do coding.So i can do it with fun. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Iure, dicta!
            </p>
            <div className="grid grid-cols-2 mt-10 space-y-2">
              <p className="flex font-serif">Name : Ahsanullah Mubin</p>
              <p className="font-serif">Email : aktershoaib574@gmail.com</p>
              <p className="font-serif">Age : 20</p>
              <p className="font-serif">From : Barishal,Bangladesh</p>
            </div>
            <div className="mt-7 mb-5 flex items-center justify-between space-x-5">
              <p
                className="border border-white bg-green-500 w-32 h-10 flex items-center justify-center rounded-full font-mono hover:bg-black duration-300
              
              hover:p-5 cursor-pointer
              "
              >Follow me
                </p> 
                <span className="h-[2px] w-14 bg-white inline-flex"/>
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
      </Container>
    </div>
  );
};

export default page;
