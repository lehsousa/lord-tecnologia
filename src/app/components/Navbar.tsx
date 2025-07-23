
"use client";

import React, { useState } from 'react';

interface AppProps { }




const Navbar: React.FC<AppProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
     <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 w-30">
            <img src="/assets/lord-logo.png" alt="logo lord" />
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-600 hover:text-[#023cfa] transition duration-300">Home</a>
            <a href="#sobre" className="text-gray-600 hover:text-[#023cfa] transition duration-300">Sobre</a>
            <a href="#servicos" className="text-gray-600 hover:text-[#023cfa] transition duration-300">Serviços</a>
            <a href="#contato" className="text-gray-600 hover:text-[#023cfa] transition duration-300">Contatos</a>
          </div>
          {/* Mobile Menu Button (Hamburger) */}
          <button onClick={toggleMobileMenu} className="md:hidden text-gray-600 hover:text-[#023cfa] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        {/* Mobile Menu Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-2 px-4 pb-2">
            <a href="#home" onClick={toggleMobileMenu} className="block text-gray-800 hover:bg-gray-100 p-2 rounded transition duration-300">Home</a>
            <a href="#sobre" onClick={toggleMobileMenu} className="block text-gray-800 hover:bg-gray-100 p-2 rounded transition duration-300">Sobre</a>
            <a href="#servicos" onClick={toggleMobileMenu} className="block text-gray-800 hover:bg-gray-100 p-2 rounded transition duration-300">Serviços</a>
            <a href="#contato" onClick={toggleMobileMenu} className="block text-gray-800 hover:bg-gray-100 p-2 rounded transition duration-300">Contatos</a>
          </div>
        )}
      </nav>
  )
}

export default Navbar