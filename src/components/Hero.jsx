import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullName = 'Progress Ada Onuoha';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayText(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF7F2] via-white to-[#FFF7F2] text-[#4A4A4A]">
      <div className="text-center max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-[#F4B6A6]">{displayText}</span>
          <span className={`text-[#F4B6A6] ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-[#CFCFCF] animate-fade-in">
          A passionate Full Stack Developer creating amazing digital experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
          <a href="#portfolio" className="bg-[#F4B6A6] hover:bg-[#E89B8C] text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg">
            View My Work
          </a>
          <a href="#contact" className="border-2 border-[#F4B6A6] text-[#F4B6A6] hover:bg-[#F4B6A6] hover:text-white px-8 py-3 rounded-full font-semibold transition duration-300">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
