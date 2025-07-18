"use client";
import { useEffect, useState } from 'react';

export default function ThemeToggleButton() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (savedTheme === 'dark' || (!savedTheme && userPrefersDark)) {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      } else {
        setIsDark(false);
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    if (typeof document !== 'undefined' && typeof localStorage !== 'undefined') {
      const newTheme = !isDark;
      setIsDark(newTheme);

      if (newTheme) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
    >
      {isDark ? (
        // Icono de sol
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z"
          />
        </svg>
      ) : (
        // Icono de luna
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-zinc-700 dark:text-zinc-200"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      )}
    </button>
  );
}