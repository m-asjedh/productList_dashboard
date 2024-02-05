import React from "react";
import { IoSearch } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  return (
    <div className="w-full mx-auto flex justify-between items-center p-10 bg-gray-500  ">
      <div>
        <h1 className="text-lg sm:text-1xl lg:text-6xl px-3 font-extrabold font-signature cursor-pointer">
          Shoe Hub
        </h1>
      </div>
      <div className="bg-white p-4 rounded-full flex items-center w-[200px] sm:w[300px] lg:w-[400px]">
        <IoSearch size={30} className="mr-3" />
        <input
          placeholder="Search Here... "
          className="bg-transparent p-2 focus:outline-none w-full "
        ></input>
      </div>
      <div className="flex  ">
        <RxAvatar size={40} className="mr-2 cursor-pointer" />
        <div className=" flex justify-center items-center text-xl font-semibold">
          Asjedh
        </div>
      </div>
    </div>
  );
};

export default Header;
