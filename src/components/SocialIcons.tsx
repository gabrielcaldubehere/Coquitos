import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const SocialIcons: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://instagram.com/Coquitoscanitas_"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110 active:scale-95 text-[#C13584]" // color Instagram
        aria-label="Instagram"
      >
        <FaInstagram size={24} />
      </a>

      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110 active:scale-95 text-[#25D366]" // color WhatsApp
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default SocialIcons;