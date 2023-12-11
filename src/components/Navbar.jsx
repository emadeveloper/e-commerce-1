import React from "react";
import Logo from "../assets/logo.webp";
import SearchBar from "./SearchBar";
import { LiaUserSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex justify-evenly py-5 px-6 border items-center">
      <div className="">
        <img src={Logo} alt="" />
      </div>
      <div className="w-full px-40">
        <SearchBar />
      </div>
      <div className="flex items-center pr-4">
        <div className="flex items-center">
          <span>{<LiaUserSolid className="text-3xl text-gray-500" />}</span>
          <p className="mr-4">Ingresar</p>
        </div>
        <span>{<CiHeart className="text-3xl mx-3" />}</span>
        <span>{<CiShoppingCart className="text-3xl" />}</span>
      </div>
    </div>
  );
};

export default Navbar;
