import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import SocialIcons from './SocialIcons';
import Carrito from './Carrito';
import '@fontsource/bebas-neue';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black font-[\'Bebas Neue\'] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="/coquitos.png" alt="Logo" className="h-20 w-auto" />
        </div>


        {/* Name Central */}
        <div className=" flex justify item-center"> <h1 className="font-[\'Bebas Neue\'] text-white bold text-">Coquito´s Cañitas</h1></div>


        {/* Right section */}
        <div className="hidden md:flex items-center space-x-4">
          <SocialIcons />
          <Carrito />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#89bf47] font-[\'Bebas Neue\']">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#EFEDE3] px-4 pb-4">
          <nav className="flex flex-col space-y-3">
            <Nav />
            <div className="flex items-center space-x-4 mt-2">
              <SocialIcons />
              <Carrito />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
