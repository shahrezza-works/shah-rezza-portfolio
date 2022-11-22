import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import photo from "../public/photo.jpeg";
import Link from "next/link";

export default function Hero() {
  const [text, count] = useTypewriter({
    words: ["Hello, The Name's Shah Rezza", "<Build-something-AWESOME />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden relative"
    >
      <BackgroundCircles />

      <Image
        width={150}
        height={150}
        style={{
          position: "relative",
          borderRadius: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          objectFit: "cover",
        }}
        src={photo}
        alt="shah rezza photo"
      />
      <div className="z-10">
        <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[2px]">
          Software Engineer | DevOps | Data Analyst
        </h2>
        <h1 className="m-0 p-0 text-gray-200 text-2xl lg:text-3xl font-semibold px-2">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-2">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
