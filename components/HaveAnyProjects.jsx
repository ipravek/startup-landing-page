"use client";
import { projectSection } from "@/public/img";
import Image from "next/image";

export default function HaveAnyProjects() {
  return (
    <>
      <div className="imageContainer flex justify-center items-center">
        <Image src={projectSection} alt="" />
        <div className="absolute flex flex-col">
          <p className="text-2xl text-center">
            Do you have any projects? <br /> Contact us
          </p>

          <div className="button flex justify-center">
            <button className="p-2 bg-black text-white rounded mt-4">
              Contact US
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
