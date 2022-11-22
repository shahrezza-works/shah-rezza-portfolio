import React from "react";
import { motion } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{
        scale: [1, 2, 2, 1, 1],
        opacity: [0.2, 0.3, 0.6, 0.3, 0.7, 0.4, 0.9, 1],
        borderRadius: ["20%", "30%", "40%", "70%", "50%", "100%"],
      }}
      transition={{ duration: 1.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[100px] w-[100px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[150px] w-[150px] mt-52 " />
      <div className="absolute border border-[#333333] rounded-full h-[320px] w-[320px] mt-52 " />
      <div className="absolute border border-[#F7AB0A] rounded-full opacity-30 h-[400px] w-[400px] mt-52 animate-ping" />
      <div className="absolute border border-[#F7AB0A] rounded-full opacity-70 h-[450px] w-[450px] mt-52 animate-ping" />
    </motion.div>
  );
}
