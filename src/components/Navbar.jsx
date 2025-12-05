import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FFF7F2] text-[#4A4A4A] fixed w-full z-10 top-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold">
              <span className="text-[#F4B6A6]" style={{ fontFamily: 'Montserrat, sans-serif' }}>a</span>
              <span className="text-[#E89B8C]" style={{ fontFamily: 'Outfit, sans-serif' }}>DA</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:bg-[#F4B6A6] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">Home</a>
              <a href="#about" className="hover:bg-[#F4B6A6] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">About</a>
              <a href="#services" className="hover:bg-[#F4B6A6] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">Services</a>
              <a href="#portfolio" className="hover:bg-[#F4B6A6] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">Portfolio</a>
              <a href="#contact" className="hover:bg-[#F4B6A6] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">Contact</a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#4A4A4A] hover:text-white hover:bg-[#F4B6A6] focus:outline-none focus:bg-[#F4B6A6] focus:text-white transition duration-300"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#FFF7F2]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block hover:bg-[#F4B6A6] hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300">Home</a>
            <a href="#about" className="block hover:bg-[#F4B6A6] hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300">About</a>
            <a href="#services" className="block hover:bg-[#F4B6A6] hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300">Services</a>
            <a href="#portfolio" className="block hover:bg-[#F4B6A6] hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300">Portfolio</a>
            <a href="#contact" className="block hover:bg-[#F4B6A6] hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
