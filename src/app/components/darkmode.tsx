"use client";

import { useTheme } from "next-themes";
import { IoHourglass, IoMoon, IoSunny } from "react-icons/io5";
import { useMounted } from "../db/useMounted";
import React from "react";
import { FaHourglass, FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  React.useEffect(() => {
    const icons = Array.from(document.querySelectorAll<HTMLLinkElement>('[rel="icon"]'))

    for (const icon of icons) {
      // The light icon is shown on dark mode and the dark icon is shown on light mode
      const currentIconType = resolvedTheme === "light" ? "dark" : "light"
      icon.href = `/images/icons/favicon-${currentIconType}.svg`
    }

  }, [resolvedTheme])

  if (!mounted) {
    return <FaHourglass className="mr-4" />;
  }

  return (
    <div
      onClick={toggleTheme}
      className="hover:cursor-pointer hover:opacity-60 mr-4"
    >
      {resolvedTheme === "light" ? <FaMoon /> : <FaSun />}
      <span className="sr-only">Toggle Theme</span>
    </div>
  );
};

export default DarkModeToggle;
