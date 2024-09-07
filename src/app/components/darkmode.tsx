"use client";

import { useTheme } from "next-themes";
import { IoMoon, IoSunny } from "react-icons/io5";

const DarkModeToggle = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`border rounded-md w-6 h-6 flex items-center justify-center border-${
        theme === "light" ? "grey-800" : "gray-100"
      } absolute top-0 -right-16`}
    >
      {theme === "light" ? <IoMoon /> : <IoSunny />}
      <span className="sr-only">Toggle Theme</span>
    </button>
  );
};

export default DarkModeToggle;
