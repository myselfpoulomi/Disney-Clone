import React from "react";
import logo from "./../assets/images/logo.png";
import NavItems from "./NavItems";
import profile from "./../assets/images/profile.jpg"

import {
  HiHome,
  HiMagnifyingGlass,
  HiPlus,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";

function Nav() {
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
      
  return (
    <div className="flex  mt-3 justify-between">
      <div className=" flex justify-between ml-6  w-[70%] text-[15px]  ">
        <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
        <div className="flex gap-20">
        {menu.map((item) => (
          <NavItems Icon={item.icon} name={item.name} />
        ))}
        </div>
      </div>
      <img src={profile} className="rounded-full h-[40px] mr-6 w-[40px] cursor-pointer object-cover"/>
    </div>
  );
}

export default Nav;
