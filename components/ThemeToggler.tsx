import React, { useState, useEffect } from 'react';
import { setCookie, getCookie } from "@/utilis/cookieManager";

const ThemeToggleButton = () => {
  const [currentTheme, setCurrentTheme] = useState('minimal');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const theme = getCookie("selectedTheme");
    if (theme) {
      setCurrentTheme(theme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'minimal' ? 'techy' : 'minimal';
    setCurrentTheme(newTheme);
    setCookie("selectedTheme", newTheme);
    window.location.href = "/";
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleTheme}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`w-14 h-7 flex items-center rounded-full p-1 duration-300 ease-in-out ${
          currentTheme === 'minimal' ? 'bg-gray-300' : 'bg-blue-600'
        }`}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${
            currentTheme === 'minimal' ? 'translate-x-0' : 'translate-x-7'
          }`}
        ></div>
      </button>
      {isHovered && (
        <div className="absolute mt-2 py-2 px-4 bg-gray-800 text-white text-sm rounded-md shadow-lg z-10 md:w-32 whitespace-normal">
          Switch to {currentTheme === 'minimal' ? 'Techy' : 'Minimal'} UI
        </div>
      )}
    </div>
  );
};

export default ThemeToggleButton;