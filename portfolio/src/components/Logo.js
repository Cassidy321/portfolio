import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center
        rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light
        "
        whileHover={{
          backgroundColor: ["#121212", "#FF6F61", "#FFB74D", "#4DB6AC", "#64B5F6", "#AB47BC", "#121212"],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        CN
      </MotionLink>
    </div>
  );
};

export default Logo;
