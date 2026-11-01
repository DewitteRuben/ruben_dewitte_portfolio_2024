"use client";

import { useTheme } from "next-themes";
import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useMounted } from "../db/useMounted";

const DarkModeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();

  React.useEffect(() => {
    const icons = Array.from(document.querySelectorAll<HTMLLinkElement>('[rel="icon"]'));
    // The light icon is shown in dark mode and the dark icon in light mode.
    const iconType = resolvedTheme === "light" ? "dark" : "light";
    for (const icon of icons) icon.href = `/images/icons/favicon-${iconType}.svg`;
  }, [resolvedTheme]);

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      aria-label="Toggle dark mode"
      className="hover:text-neutral-900 dark:hover:text-neutral-100"
    >
      {!mounted ? <span className="block h-4 w-4" /> : resolvedTheme === "light" ? <FiMoon /> : <FiSun />}
    </button>
  );
};

export default DarkModeToggle;
