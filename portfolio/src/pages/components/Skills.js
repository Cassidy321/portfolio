import React, { useState } from "react";
import Image from "next/image";

const techColors = {
  CSS: "bg-2465f1",
  HTML: "bg-e44d27",
  JavaScript: "bg-f0dc4d",
  Laravel: "bg-ff2d20",
  NextJS: "bg-333538",
  NodeJS: "bg-393",
  PHP: "bg-4b588f",
  React: "bg-61dafb",
  "React Native": "bg-61dafb",
  Symfony: "bg-333538",
  Tailwind: "bg-06b6d4",
  SQL: "bg-379ad6",
};

const Skills = ({ logo, name }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getBgColorClass = () => {
    if (isHovered) {
      return techColors[name];
    } else {
      return isDarkMode ? "bg-dark" : "bg-light";
    }
  };

  const getAdjustedLogoSrc = () => {
    if (isHovered) {
      return logo.lightSrc;
    } else {
      return isDarkMode ? logo.darkSrc : logo.lightSrc;
    }
  };

  const transitionClass = "transition ease-in-out duration-300";

  return (
    <div
      className={`flex items-center justify-center p-2 border border-dark dark:border-light rounded-lg ${getBgColorClass()} ${transitionClass} w-60`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center">
        <Image
          src={getAdjustedLogoSrc()}
          alt={`${name} logo`}
          width={30}
          height={30}
          className={`filter ${isHovered ? "brightness-100" : "brightness-50"}`}
        />
        <span
          className={`ml-2 font-medium ${
            isHovered ? "text-light" : "text-dark"
          }`}
        >
          {name}
        </span>
      </div>
    </div>
  );
};

export default Skills;
