import { Moon, Sun } from "lucide-react";
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

  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      className="text-[var(--color-neutral-100)] transition-all duration-500"
      onClick={toggleTheme}
      aria-pressed={theme === "dark"}
      aria-label={`Switch the page theme to ${nextTheme}`}
    >
      {theme === "dark" ? (
        <Sun aria-hidden="true" />
      ) : (
        <Moon aria-hidden="true" />
      )}
    </button>
  );
}

export default ToggleTheme;
