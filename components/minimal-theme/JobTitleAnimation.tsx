"use client"
import React, { useState, useEffect } from "react";

const JobTitleAnimation = () => {
    const titles = ["Full Stack Developer", "Software Engineer", "Freelancer"];
    const [titleIndex, setTitleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      const animationSpeed = isDeleting ? 50 : 150;
      const pauseDuration = 1500;
  
      const timer = setTimeout(() => {
        if (!isDeleting && charIndex === titles[titleIndex].length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
  
        if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
          return;
        }
  
        setCharIndex((prevIndex) => 
          isDeleting ? prevIndex - 1 : prevIndex + 1
        );
      }, animationSpeed);
  
      return () => clearTimeout(timer);
    }, [charIndex, isDeleting, titleIndex]);
  
    return (
      <p className="text-center text-gray-600 dark:text-gray-400 mb-4 h-6">
        {titles[titleIndex].substring(0, charIndex)}
        <span className="animate-[blink_1s_steps(1)_infinite]">|</span>
      </p>
    );
  };
  
  export default JobTitleAnimation;