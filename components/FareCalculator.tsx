
import React, { useState } from 'react';
import { LocationMarkerIcon, ArrowRightIcon, CashIcon } from './Icons';

const FareCalculator: React.FC = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [estimatedFare, setEstimatedFare] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCalculateFare = (e: React.FormEvent) => {
    e.preventDefault();
    if (!from || !to) return;

    setIsLoading(true);
    setEstimatedFare(null);

    // Simulate API call for distance and fare calculation
    setTimeout(() => {
      const randomDistance = Math.random() * 20 + 2; // 2km to 22km
      const baseFare = 25; // Opening fee
      const perKmRate = 18.5;
      const calculatedFare = baseFare + randomDistance * perKmRate;
      setEstimatedFare(Math.round(calculatedFare));
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-gray-700/50">
      <h2 className="text-2xl font-bold text-amber-400 mb-4">Ücret Hesaplayıcı</h2>
      <form onSubmit={handleCalculateFare} className="space-y-4">
        <div className="relative">
          <LocationMarkerIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="Nereden?"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 pl-10 pr-4 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
            required
          />
        </div>
        <div className="relative">
          <LocationMarkerIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Nereye?"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 pl-10 pr-4 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center items-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:bg-amber-700 disabled:cursor-not-allowed text-gray-900 font-bold py-3 px-4 rounded-lg transition-colors duration-300 shadow-lg shadow-amber-500/20"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Hesaplanıyor...
            </>
          ) : (
            <>
              Hesapla
              <ArrowRightIcon className="h-5 w-5" />
            </>
          )}
        </button>
      </form>

      {estimatedFare !== null && (
        <div className="mt-6 p-4 bg-gray-900 rounded-lg text-center border border-gray-700">
          <p className="text-gray-300">Tahmini Ücret:</p>
          <p className="text-3xl font-bold text-amber-400 flex items-center justify-center gap-2">
            <CashIcon className="h-8 w-8" />
            {estimatedFare} TL
          </p>
          <p className="text-xs text-gray-500 mt-2">Bu ücret trafik ve yol durumuna göre değişiklik gösterebilir.</p>
        </div>
      )}
    </div>
  );
};

export default FareCalculator;
