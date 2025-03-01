import React, { useContext, useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { assets } from "../frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {setShowSearch,getCartCount} = useContext(ShopContext);


  return (
    <div className="flex items-center justify-between py-2 font-medium">
      
      <Link to='/'><img src={assets.logo1} className="h-10" alt="" /></Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

        <div className="group relative">
          <Link to="/login"><img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          /></Link>

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col text-gray-600 bg-slate-300 gap-2 py-3 px-5 w-36">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute text-center leading-4 w-4 right-[-5px] bottom-[-5px] bg-black text-white rounded-full aspect-square text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer md:hidden"
          alt=""
        />
      </div>

      {/* Sidenar Menu for Small Screen */}

      <div
        className={`absolute top-0 right-0 bottom-0 bg-white overflow-hidden transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      > {/* Cover Whole Screen */}
        <div className="flex flex-col cursor-pointer text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex p-3 gap-4 items-center "
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
            <NavLink onClick={()=>setVisible(false)} to="/" className="py-2 pl-6 border">Home</NavLink>
            <NavLink onClick={()=>setVisible(false)} to="/collection" className="py-2 pl-6 border">Collection</NavLink>
            <NavLink onClick={()=>setVisible(false)} to="/about" className="py-2 pl-6 border">About</NavLink>
            <NavLink onClick={()=>setVisible(false)} to="/contact" className="py-2 pl-6 border">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
