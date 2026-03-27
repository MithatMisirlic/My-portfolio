import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
        <button className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
          <Sun size={20} />
        </button>
    );
  }

  return (
      <button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Toggle theme"
      >
        {resolvedTheme === "dark" ? (
            <Sun size={20} className="text-yellow-500" />
        ) : (
            <Moon size={20} className="text-gray-700" />
        )}
      </button>
  );
}