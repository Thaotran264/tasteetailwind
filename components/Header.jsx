import React from "react";
import { BsSearch, BsCart } from "react-icons/bs";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white">
      <nav className="container h-12 md:h-16 text-red-900 flex p-2 mx-auto items-center justify-between">
        <div className="h-full">
          <img
            className="w-full h-full object-cover"
            src="/image/logo.jpeg"
            alt=""
          />
        </div>
        <div className="w-28  md:w-36 lg:w-40">
          <select className="w-full h-8 border border-orange-400 rounded-md text-sm md:text-base">
            <option>Ho Chi Minh</option>
            <option>Da Nang</option>
            <option>Ha Noi</option>
          </select>
        </div>
        <div className="hidden lg:block lg:w-3/6">
          <form className="flex border items-center w-full">
            <input type="text" className="p-1 w-full" />
            <button className="text-slate-900 text-xs md:text-lg px-2 h-4 border-l-2 border-indigo-500">
              <BsSearch />
            </button>
          </form>
        </div>
        <button className="border border-red-700 lg:hidden p-1 rounded-md">
          <BsSearch />
        </button>
        <div className="flex items-center">
          <button className="hidden md:block border p-1 mr-1 lg:mr-4 text-xl rounded-md">
            <BsCart className="" />
          </button>
          <button className="border px-2 rounded-md text-sm md:text-lg">
            Đăng nhập
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
