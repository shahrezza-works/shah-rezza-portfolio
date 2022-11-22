import Image from "next/image";
import React from "react";
import photo from "../public/myphoto.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className=" flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">
        About
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="-mb-20 md:mb-0"
      >
        <Image
          width={350}
          height={350}
          alt=""
          src={photo}
          quality={100}
          className="w-38 h-38 md:w-55 md:w-55"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 250 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="space-y-10 px-0 md:px-10 md:w-[60%]"
      >
        <h4 className="text-3xl lg:text-4xl font-semibold text-gray-300">
          Here is a{" "}
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            transition={{ duration: 4 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="underline underline-offset-4 decoration-[#F7AB0A]/50 text-2xl lg:text-3xl"
          >
            little
          </motion.span>{" "}
          background
        </h4>
        <p>
          If you want, call me{" "}
          <span className="border px-2 font-medium border-[#F7AB0A]/50 tracking-wide">
            Shah
          </span>
          . I've been coding for almost 6 years, and I'm proficient in a variety
          of programming languages, including PHP, Python, Javascript, React{" "}
          <span className="text-[#F7AB0A]/50">&</span> etc... I also work as a
          data analyst <span className="text-[#F7AB0A]/50">&</span> data
          engineer, using technologies like Microsoft PowerBI and Google Data
          Studio to illustrate information.
        </p>
      </motion.div>
    </div>
  );
}
