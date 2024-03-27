import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px] ">
      <Image
        src="https://images.unsplash.com/photo-1682659481243-a337e0dde6b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="banner-img"
        className="object-cover object-left brightness-75"
        fill
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className=" capitalize text-sm sm:text-lg lg:text-4xl  text-white font-bold">
          Not sure where to go ? Perfect.
        </p>
        <button
          type="button"
          className=" capitalize text-black text-opacity-75 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
        >
          I am flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
