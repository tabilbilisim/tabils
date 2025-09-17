
import React from 'react';
import { TaxiIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/50 border-t border-gray-800 mt-16">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <div className="flex justify-center items-center gap-2 mb-2">
            <TaxiIcon className="h-6 w-6 text-amber-500" />
            <p className="font-bold">Uşak Taksi</p>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Uşak Taksicisi. Tüm hakları saklıdır.</p>
        <p className="text-xs mt-1">Uşak'ın her yerine güvenli ve hızlı ulaşım.</p>
      </div>
    </footer>
  );
};

export default Footer;
