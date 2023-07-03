"use client";
import Logo from "@/public/logo.svg";
import Hamburger from "@/public/hamburger.svg";
import Cross from "@/public/cross.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <div className="relative flex px-10 py-5 items-center justify-between mx-auto w-9/12">
        <div className="flex p-4">
          <Link href={"/"} className="flex justify-center gap-1">
            <Image src={Logo} alt="Logo" />
            Logo
          </Link>
        </div>

        <div className="flex lg:hidden">
          {isMobile ? (
            <Image
              src={Cross}
              alt=""
              className="z-10"
              onClick={(_) => setIsMobile(!isMobile)}
            />
          ) : (
            <Image
              className="z-10"
              src={Hamburger}
              alt=""
              onClick={(_) => setIsMobile(!isMobile)}
            />
          )}
        </div>

        {isMobile && (
          <div className="absolute top-0 left-0 font-semibold">
            <div className="flex flex-col gap-10 bg-white w-screen h-screen items-center justify-center">
              <Link href="#" className="link">
                Home
              </Link>
              <Link href="#about" className="link">
                About
              </Link>
              <Link href="#blog" className="link">
                Blog
              </Link>
              <Link href="#testimonials" className="link">
                Testimonials
              </Link>
              <Link href={""} className="bg-blue-700 p-2 rounded text-white">
                Contact Us
              </Link>
            </div>
          </div>
        )}

        <div className="hidden lg:flex">
          <div className="flex gap-10 mx-20">
            <Link href="/" className="link">
              Home
            </Link>
            <Link href="#about" className="link">
              About
            </Link>
            <Link href="#blog" className="link">
              Blog
            </Link>
            <Link href="#testimonials" className="link">
              Testimonials
            </Link>
          </div>

          <div className="contact-us">
            <Link href={""} className="bg-blue-700 p-2 rounded text-white">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
