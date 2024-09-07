"use client";

import { useTheme } from "next-themes";
import { IoMoon, IoSunny } from "react-icons/io5";

const DarkModeToggle = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      onClick={toggleTheme}
      className="hover:cursor-pointer hover:opacity-60 mr-4"
    >
      {theme === "light" ? <IoMoon /> : <IoSunny />}
      <span className="sr-only">Toggle Theme</span>
    </div>
  );
};

export default DarkModeToggle;
