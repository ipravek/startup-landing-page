"use client";
import { case1, case2, case3, case4 } from "@/public/img";
import Image from "next/image";

export default function CaseStudy() {
  return (
    <div className="md:p-20">
      <h3 className="text-4xl text-center">Our case studies</h3>
      <h2 className="text-lg text-center text-gray-400 p-2">
        Lorem ipsum dolor sit amet, tincidunt vestibulum.
      </h2>

      <div className="flex flex-col gap-10 items-center md:p-12 md:flex md:flex-row md:justify-center">
        <Card
          image={case1}
          title="Online Marketing"
          subTitle="Seo, Marketing"
          text="Know more about Online marketing"
          bgColor="orange"
        />
        <Card
          image={case2}
          title="Web Development"
          subTitle="Developing, Designing"
          text="Know more about Web Development"
          bgColor="yellow"
        />
        <Card
          image={case3}
          title="Web Designing"
          subTitle="Designing, Developing"
          text="Know more about Web Designing"
          bgColor="sky"
        />
        <Card
          image={case4}
          title="Software Development"
          subTitle="Developing, Designing"
          text="Know more about Software Development"
          bgColor="violet"
        />
      </div>
    </div>
  );
}

const Card = ({ image, text, link, title, subTitle, bgColor = "blue" }) => {
  return (
    <div className="flex flex-col text-center">
      <div
        className={`w-[16rem] h-[16rem] bg-orange-400 flex justify-center items-center relative`}
      >
        <Image src={image} alt="" className="w-[10rem] h-[10rem]" />
        <div
          className="opacity-0 duration-300 cursor-pointer text-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-xl font-semibold
         hover:opacity-100 hover:w-full hover:h-full hover:backdrop-brightness-50 flex justify-center items-center flex-col"
        >
          {text}
          <button className="m-1 p-2 bg-sky-200 rounded text-black text-sm">
            Read More
          </button>
        </div>
      </div>
      <div className="title pt-2 font-semibold">{title}</div>
      <div className="text-grey-400">{subTitle}</div>
    </div>
  );
};
