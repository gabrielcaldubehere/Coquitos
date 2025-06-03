import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import SocialIcons from './SocialIcons';
import Carrito from './Carrito';
import Nav from './Nav';
import '@fontsource/bebas-neue';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black font-['Bebas Neue'] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/coquitos.png" alt="Logo" className="h-20 w-auto" />
          </div>

          {/* Título central */}
          <div className="flex-1 flex justify-center ml-30">
            <h1 className="text-white font-bold text-5xl text-center ">
              Coquito´s Cañitas
            </h1>
          </div>

          {/* Íconos derecha */}
          <div className="hidden md:flex items-center space-x-4">
            <SocialIcons />
            <Carrito />
          </div>

          {/* Botón menú mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#89bf47]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Nav Desktop debajo del título */}
        <div className="hidden md:flex justify-center mt-4">
          <Nav />
        </div>

        {/* Nav Mobile desplegable */}
        {isOpen && (
          <div className="md:hidden bg-[#EFEDE3] px-4 pb-4 mt-2 rounded-md">
            <nav className="flex flex-col space-y-3 items-start">
              <Nav />
              <div className="flex items-center space-x-4 mt-2">
                <SocialIcons />
                <Carrito />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
