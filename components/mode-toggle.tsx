"use client";

import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="align-middle"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "dark" ? <MdLightMode size={25} /> : <MdDarkMode size={25} />}
    </button>
  );
}
