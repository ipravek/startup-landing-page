"use client";
import HeroImage from "@/public/img/hero.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="p-5 flex flex-col justify-center">
      <h3 className="font-bold text-center text-3xl lg:text-5xl lg:p-10">
        Search engine optimisation & <br />
        <span>Marketing.</span>
      </h3>
      <h1 className="text-gray-400 text-center text-lg">
        Simple is a simple template with a creative design that solves all your
        marketing and SEO queries.
      </h1>

      <div className="flex gap-4 justify-center p-5">
        <button className="bg-orange-400 p-3 rounded duration-300 hover:bg-orange-600 hover:text-white">
          Get Started
        </button>
        <button className="bg-blue-400 p-3 rounded duration-300 hover:bg-blue-800 hover:text-white">
          Learn More
        </button>
      </div>

      <div className="flex justify-center">
        <Image src={HeroImage} alt="" />
      </div>
    </div>
  );
}
