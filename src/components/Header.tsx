import React from "react";
import Container from "./Container";
import Link from "next/link";
import { navigation } from "@/constants/data";

const Header = () => {
  return (
    <div className=" w-full h-16 relative">
      <Container className={"h-full flex items-center justify-between"}>
        <div>
          <p className="text-white cursor-pointer hover:text-slate-400">AHSANBeY</p>
        </div>
        <div>
          <ul className="flex items-center uppercase gap-4 text-sm font-semibold text-white">
            {navigation.map((item) => (
              <Link key={item.title} href={item.href}>
                <li className="hover:text-slate-400 relative group overflow-hidden  ">
                  {item.title}
                  <span className="h-[2px]  w-full inline-flex bg-black absolute -translate-x-[100%] left-0 bottom-1.5 font-semibold
                  
                  transition-transform group-hover:translate-x-0 duration-300" />
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Header;
