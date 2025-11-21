import { Moon, Sun } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setTheme } from "../../state/ui/uiSlice";
import { useEffect } from "react";

function ToggleTheme() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.ui.theme);
  const nextTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const html = document.documentElement;
    html.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const html = document.documentElement;
    html.dataset.theme = nextTheme;
    dispatch(setTheme(nextTheme));
  }

  const ThemeIcon = theme === "dark" ? Sun : Moon;

  return (
    <button
      type="button"
      className="text-[var(--color-neutral-100)] transition-all duration-500 hover:text-[var(--color-accent)]"
      onClick={toggleTheme}
      aria-pressed={theme === "dark"}
      aria-label={`Switch the page theme to ${nextTheme}`}
    >
      <ThemeIcon aria-hidden="true" data-testid="icon" />
    </button>
  );
}

export default ToggleTheme;
