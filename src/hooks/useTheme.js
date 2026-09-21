import { useEffect, useState } from "react";

/**
 * Cycles through: system -> dark -> light -> system.
 * `null` means "follow the OS/browser preference".
 */
export function useTheme() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme) root.setAttribute("data-theme", theme);
    else root.removeAttribute("data-theme");
  }, [theme]);

  return [theme, setTheme];
}
