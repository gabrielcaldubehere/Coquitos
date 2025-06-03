import React from 'react';

const Nav: React.FC = () => {
  return (
    <>
<div className="hidden md:flex space-x-8">
        <a href="#inicio" className="text-[#89bf47] hover:text-green-600 font-medium">Inicio</a>
      <a href="#productos" className="text-[#89bf47] hover:text-green-600 font-medium">Productos</a>
      <a href="#contacto" className="text-[#89bf47] hover:text-green-600 font-medium">Contacto</a>
    </div>
    </>
  );
};

export default Nav;