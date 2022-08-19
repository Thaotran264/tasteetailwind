import React from "react";
import { BsSearch, BsCart } from "react-icons/bs";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      <nav className="container border-b-2 border-black h-12 md:h-16 text-red-900 flex p-2 mx-auto items-center justify-between">
        <div className="h-full">
          <img
            className="hidden md:block w-full h-full object-cover"
            src="/image/logo.jpeg"
            alt=""
          />
          <img
            className="md:hidden w-full h-full object-cover"
            src="/image/mobileLogo.jpg"
            alt=""
          />
        </div>
        {/* Dropdown */}
        <div className="w-32 md:w-36 lg:w-40">
          <select className="w-full p-1.5 h-8 focus:outline-none text-sm md:text-base">
            <option>TP HCM</option>
            <option>Da Nang</option>
            <option>Ha Noi</option>
          </select>
        </div>
        <div className="hidden lg:block lg:w-3/6">
          <form className="flex border items-center w-full">
            <input type="text" className="p-1 w-full focus:outline-none " />
            <button className="text-slate-900 text-xs md:text-lg px-2 h-4 border-l-2 border-indigo-500">
              <BsSearch />
            </button>
          </form>
        </div>
        <div className="flex items-center">
          <button className="lg:hidden p-1 ">
            <BsSearch />
          </button>
          <button className="hidden md:block p-1 mr-1 lg:mr-4 text-xl">
            <BsCart className="" />
          </button>
          <button className="hidden md:flex border rounded-md p-2 text-sm md:text-lg">
            Đăng nhập
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
