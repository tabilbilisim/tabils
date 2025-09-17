import React from 'react';
import { TaxiIcon, PhoneIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-sm border-b border-gray-700/50 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <TaxiIcon className="h-8 w-8 text-amber-400" />
          <span className="text-2xl font-bold text-white tracking-wider">
            UŞAK TAKSİCİSİ
          </span>
        </div>
        <a 
          href="tel:+905324996469"
          className="hidden sm:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold py-2 px-4 rounded-lg transition-colors duration-300 shadow-lg shadow-amber-500/20"
        >
          <PhoneIcon className="h-5 w-5" />
          Hemen Ara
        </a>
      </div>
    </header>
  );
};

export default Header;