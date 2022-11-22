import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-5 sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-10">
      {/* Social Icons */}
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.3 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://linkedin.com/in/shahrezzajasni"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.facebook.com/shahrezza.jasni/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.twitter.com/shahrezza777/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/shahrezza777/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/shahrezza-works"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.3 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row items-center text-gray-500 cursor-pointer"
      >
        {/* Mail */}
        <Link href="mailto:shahrezza.works@gmail.com">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />

          <p className="uppercase hidden md:inline-flex text-sm text-gray-500 font-semibold">
            Get In Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
