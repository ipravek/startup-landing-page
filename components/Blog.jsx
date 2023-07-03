"use client";
import Image from "next/image";
import Card from "@/components/Card";
import { blog1, blog2 } from "@/public/img/index";

export default function Blog() {
  return (
    <div className="flex flex-col w-9/12 mx-auto">
      <div className="flex justify-around items-center p-2">
        <div className="card">
          <Card
            title="We Offer a Full Range of Digital Marketing Services!"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque beatae et laudantium quia sed quas ipsum repellendus dicta delectus perspiciatis!"
          />
        </div>
        <div className="image hidden md:block">
          <Image src={blog1} alt="no image" />
        </div>
      </div>

      <div className="flex justify-around items-center p-3">
        <div className="image  hidden md:block">
          <Image src={blog2} alt="no image" />
        </div>
        <div className="card">
          <Card
            title="Leading Digital Agency for Business Solution."
            body="Power-packed with impressive
            features and well-optimized, this
            template is designed to provide the
            best performance in all circumstances."
          />
        </div>
      </div>
    </div>
  );
}
