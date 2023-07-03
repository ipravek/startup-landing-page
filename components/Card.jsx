"use client";
import Image from "next/image";
import Link from "next/link";

const bodyText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, consequatur?";
export default function Card({
  image,
  title = "Default Title",
  body = bodyText,
  link,
}) {
  return (
    <div className="w-[225px] min-h-60 flex flex-col p-1">
      {image && (
        <Image src={image} alt={""} className="py-2 duration-300 hover" />
      )}
      <div className="title py-3 font-bold text-lg">{title}</div>

      <div className="body py-2">{body}</div>

      {link && (
        <div className="link py-2 text-gray-400">
          {<Link href={link}>Read More</Link>}
        </div>
      )}
    </div>
  );
}
