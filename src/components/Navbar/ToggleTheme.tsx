import { Moon, Sun } from "lucide-react";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setTheme } from "../../state/ui/uiSlice";

function ToggleTheme() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.ui.theme);

  function toggleTheme() {
    const html = document.documentElement;
    const newTheme = theme === "light" ? "dark" : "light";
    html.dataset.theme = newTheme;
    dispatch(setTheme(newTheme));
  }

  return (
    <button
      className="text-[var(--color-neutral-100)] transition-all duration-500"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}

export default ToggleTheme;
