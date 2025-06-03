import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Carrito: React.FC = () => {
  return (
    <button
      className="flex items-center bg-[#89bf47] text-white px-3 py-1 rounded hover:bg-green-600 transition-transform transform hover:scale-105"
      aria-label="Mi pedido"
    >
      <FaShoppingCart className="mr-2" size={18} />
      Mi pedido
    </button>
  );
};

export default Carrito;