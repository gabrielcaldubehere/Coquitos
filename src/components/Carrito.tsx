import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

interface CarritoProps {
  onlyIcon?: boolean;
}

const Carrito: React.FC<CarritoProps> = ({ onlyIcon = false }) => {
  if (onlyIcon) {
    // Solo ícono sin texto, sin botón completo
    return (
      <button
        className="text-[#89bf47] p-1 hover:text-green-600 transition-transform transform hover:scale-110"
        aria-label="Mi pedido"
      >
        <FaShoppingCart size={22} />
      </button>
    );
  }

  // Botón completo con texto
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