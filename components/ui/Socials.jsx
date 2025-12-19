import Link from 'next/link';
import {
    RiLinkedinFill, 
    RiYoutubeFill,
    RiTiktokFill

} from "react-icons/ri";
import React from 'react'
import { icons } from 'lucide-react';


const socials = [
    {
        icon: <RiLinkedinFill />,
        path: "https://www.linkedin.com/in/mercy-sons-ghana-llc-0b4b62209/"
    },
    {
        icon: <RiYoutubeFill />,
        path: "https://www.youtube.com/@mercysonsghana"
    },
    {
        icon: <RiTiktokFill />,
        path: "https://www.tiktok.com/@mercysonsghana"
    }

];

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className= {`${containerStyles}`}>
      {socials.map((item, index) => {
        return <Link href={item.path} key={index} 
        className={`${iconStyles}`}>{item.icon}</Link>
      })}
    </div>
  )
}

export default Socials;
