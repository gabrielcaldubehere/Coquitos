import React from 'react';

const SocialIcons: React.FC = () => {
  return (
    <>
      <a href="https://instagram.com/Coquitoscanitas_" target="_blank" rel="noopener noreferrer">
        <img src="/instagram.png" alt="Instagram" className="h-6 w-6" />
      </a>
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <img src="/whatsapp.png" alt="WhatsApp" className="h-6 w-6" />
      </a>
    </>
  );
};

export default SocialIcons;