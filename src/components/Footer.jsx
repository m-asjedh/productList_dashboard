import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mx-auto ">
      <div className="flex items-center justify-center  text-3xl font-bold ">
        Shoe Hub
      </div>
      <div className="flex items-center justify-center m-4 text-xl font-semibold">
        "Elevate Your Style, One Shoe at a Time!"
      </div>
      <div className="flex justify-center items-center m-4 gap-6">
        <IoLogoInstagram className="cursor-pointer" size={30} />
        <RiTwitterXLine className="cursor-pointer" size={30} />
        <BiLogoFacebookCircle className="cursor-pointer" size={30} />
        <FaLinkedin className="cursor-pointer" size={30} />
      </div>
      <div className="flex justify-center items-center mt-4 text-md font-semibold">
        Copyright © 2023 Shoe Hub. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
