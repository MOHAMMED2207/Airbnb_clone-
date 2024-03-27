import Image from "next/image";
import Link from "next/link";
import React from "react";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";

import axios from "axios";
const Header = ({ placeholder }: { placeholder?: string }) => {


  
  return (
    <header className=" relative top-0 z-50 bg-white shadow-md p-5">
      <div className="container grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 w-full place-content-center">
        <Link href="/" className="relative flex items-center my-auto h-10">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
            alt="logo-img"
            fill
            className="object-contain object-left "
          />
        </Link>
        <Searchbar placeholder={placeholder} />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
