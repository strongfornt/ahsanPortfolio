import React from "react";
import Container from "./Container";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { SiFacebook } from "react-icons/si";
const Social = () => {
  return (
    <div>
      <Container className={" h-36 "}>
        <ul className=" relative w-full h-full   ">
          <li className="absolute right-0  text-2xl text-white cursor-pointer ">
            <SiFacebook />
          </li>

          <li className="absolute right-0 mt-7 text-2xl text-white py-2 cursor-pointer">
            <AiFillLinkedin className="rounded-full" />
          </li>
          <li className="absolute right-0 mt-14 text-2xl text-white py-3 cursor-pointer">
            <AiOutlineGithub />
          </li>
          <li className="absolute right-0 mt-24 text-2xl text-white py-3 cursor-pointer">
            <AiFillInstagram />
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Social;
