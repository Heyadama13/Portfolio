import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2D2D2D] text-[#F5E6E0] fixed w-full z-10 top-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold">
              <span className="text-[#D4A5A5]" style={{ fontFamily: 'Montserrat, sans-serif' }}>a</span>
              <span className="text-[#C48B8B]" style={{ fontFamily: 'Outfit, sans-serif' }}>DA</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:bg-[#D4A5A5] hover:text-[#2D2D2D] px-3 py-2 rounded-md text-sm font-medium transition duration-300">Home</a>
              <a href="#about" className="hover:bg-[#D4A5A5] hover:text-[#2D2D2D] px-3 py-2 rounded-md text-sm font-medium transition duration-300">About</a>
              <a href="#services" className="hover:bg-[#D4A5A5] hover:text-[#2D2D2D] px-3 py-2 rounded-md text-sm font-medium transition duration-300">Services</a>
              <a href="#portfolio" className="hover:bg-[#D4A5A5] hover:text-[#2D2D2D] px-3 py-2 rounded-md text-sm font-medium transition duration-300">Portfolio</a>
              <a href="#contact" className="hover:bg-[#D4A5A5] hover:text-[#2D2D2D] px-3 py-2 rounded-md text-sm font-medium transition duration-300">Contact</a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#F5E6E0] hover:text-[#2D2D2D] hover:bg-[#D4A5A5] focus:outline-none transition duration-300"
            >
              <div className="w-6 h-6 relative flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1.5'}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1.5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden bg-[#2D2D2D] overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" className="block hover:bg-[#D4A5A5] hover:text-[#2D2D2D] px-3 py-2 rounded-md text-base font-medium transition duration-300">Home</a>
          <a href="#about" className="block hover:bg-[#D4A5A5] hover:text-[#2D2D2D] px-3 py-2 rounded-md text-base font-medium transition duration-300">About</a>
          <a href="#services" className="block hover:bg-[#D4A5A5] hover:text-[#2D2D2D] px-3 py-2 rounded-md text-base font-medium transition duration-300">Services</a>
          <a href="#portfolio" className="block hover:bg-[#D4A5A5] hover:text-[#2D2D2D] px-3 py-2 rounded-md text-base font-medium transition duration-300">Portfolio</a>
          <a href="#contact" className="block hover:bg-[#D4A5A5] hover:text-[#2D2D2D] px-3 py-2 rounded-md text-base font-medium transition duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
