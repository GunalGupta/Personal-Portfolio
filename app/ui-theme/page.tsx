"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { setCookie, getCookie } from "@/utilis/cookieManager";

const ThemeSelection: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const theme = getCookie("selectedTheme");
    if (theme) {
      router.push("/");
    }
  }, [router]);

  const selectTheme = (theme: "minimal" | "techy") => {
    setCookie("selectedTheme", theme);
    window.location.href = "/";
  };

  const themes = [
    { name: "Minimal", shapes: ["square", "circle", "triangle", "diamond"] },
    { name: "Techy", shapes: ["square", "circle", "triangle", "diamond"] },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-2 font-sans">One Portfolio</h1>
        <h1 className="text-5xl font-semibold font-sans">Two Personalities</h1>
        <br/>
        <h4 className="font-sans mt-4 mb-4">Choose any one ui-theme:</h4>
      </motion.div>
      <div className="flex space-x-12">
        {themes.map((theme, index) => (
          <motion.div
            key={theme.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => selectTheme(theme.name.toLowerCase() as any)}
              className="w-64 h-64 bg-gray-800 rounded-lg shadow-lg flex flex-wrap justify-center items-center p-6 hover:bg-gray-700 transition-colors duration-200"
            >
              {theme.shapes.map((shape, i) => (
                <div
                  key={i}
                  className={`w-20 h-20 m-2 ${
                    theme.name === "Minimal"
                      ? ["border-2 border-white", "border-2 border-white", "bg-white", "bg-white"][i]
                      : "bg-opacity-100"
                  } ${
                    shape === "square"
                      ? "rounded"
                      : shape === "circle"
                      ? "rounded-full"
                      : shape === "triangle"
                      ? "triangle"
                      : "diamond"
                  } ${
                    theme.name === "Techy"
                      ? ["bg-purple-500", "bg-green-400", "bg-blue-400", "bg-indigo-500"][i]
                      : ""
                  }`}
                ></div>
              ))}
            </motion.button>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="mt-4 text-2xl font-semibold font-sans"
            >
              {theme.name}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelection;