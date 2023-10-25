import { FaWindowClose, FaFacebookSquare,FaHome,FaEnvelope } from "react-icons/fa";
import { AiFillHome ,AiFillLinkedin,AiOutlineGithub,AiFillInstagram} from "react-icons/ai";
import { SiSimilarweb, SiWebmoney, SiPhotobucket,SiFacebook  } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import {FaUser} from 'react-icons/fa';
import {MdNoteAlt} from 'react-icons/md'
import {BiSolidShoppingBagAlt} from 'react-icons/bi'

export const navigation = [
  { title: "About ", href: "/aboutme" },
  { title: "Resume", href: "/services" },

  { title: "Portfolio", href: "/portfolio" },
  { title: "Contact", href: "/contact" },
];
export const sidebar = [
  {title:"Home", href: "/" ,icon:FaHome,},
  { title: "About me ", href: "/aboutme" ,icon:FaUser, },
  { title: "Resume", href: "/services",icon:MdNoteAlt, },

  { title: "Portfolio", href: "/portfolio" , icon:BiSolidShoppingBagAlt, },
  { title: "Contact", href: "/contact",icon:FaEnvelope, },
];

export const backhome = [
  {
    title: AiFillHome,
    href: "/",
  },
];

export const Service = [
  {
    icon: SiSimilarweb,
    title: "Web Design",
    description:
      "I can design your website.Desing is my fevorite part.so i can do it very well.",
  },
  {
    icon: SiWebmoney,
    title: "Web Developer",
    description:
      "I can develop your website.Devlop is my fevorite part.so i can do it very well.",
  },
  {
    icon: SiPhotobucket,
    title: "Photography",
    description:
      "Ohoo! Photography is my favorite activity.when i go out for a walk,some picture are taken of nature and myself.",
  },
];

export const Contact = [
  
  {
    icon: IoLocationSharp,
    title: "Kazirhat,Mehendiganj,Barishal",
    
  },
  {
    icon: IoMdCall,
    title: "+7774738479",
  },
  {
    icon: GrMail,
    title:'aktershoaib574@gmail',
  },
  {
    icon: FaFacebookSquare,
    title: "Ahsan Ullah",
  },
 
];
export const social =[
  {icon:SiFacebook ,},
  {icon:AiFillLinkedin,},
  {icon:AiOutlineGithub,},
  {icon:AiFillInstagram,},
];
