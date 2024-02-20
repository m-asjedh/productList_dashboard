import React from "react";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  return (
    <div className="w-full mx-auto flex justify-between items-center p-10 ">
      <div>
        <h1 className="text-lg sm:text-1xl lg:text-6xl px-3 font-extrabold font-signature cursor-pointer">
          Shoe Hub
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <nav>
          <ul className="flex space-x-4 text-2xl gap-10">
            <li>Home</li>
            <li className="underline underline-offset-4">Products</li>
            <li>Cart</li>
            <li>About Us</li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center">
        <RxAvatar size={40} className="mr-2 cursor-pointer" />
        <div className="text-xl font-semibold">Asjedh</div>
      </div>
    </div>
  );
};

export default Header;
