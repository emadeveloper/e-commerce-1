import React from "react";
import Logo from "../assets/logo.webp";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="flex justify-between py-6 px-6 border gap-8 items-center">
      <div className="">
        <img src={Logo} alt="" />
      </div>
      <div className="w-full px-40">
        <SearchBar />
      </div>
      <div>
        <span>User</span>
        <span>Favorites</span>
        <span>Cart</span>
      </div>
    </div>
  );
};

export default Navbar;
