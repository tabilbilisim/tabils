
import React, { useState } from 'react';
import { getTripSuggestions } from '../services/geminiService';
import { SparklesIcon } from './Icons';

const TripPlanner: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGetSuggestions = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError('');
    setSuggestion('');

    try {
      const result = await getTripSuggestions(prompt);
      setSuggestion(result);
    } catch (err) {
      setError('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const formattedSuggestion = suggestion.split('\n').map((line, index) => {
    if (line.startsWith('* ') || line.startsWith('- ')) {
      return <li key={index} className="ml-5 list-disc">{line.substring(2)}</li>;
    }
    if (line.match(/^#+\s/)) {
        const level = line.match(/^#+/)![0].length;
        const text = line.replace(/^#+\s/, '');
        return React.createElement(`h${level+2}`, { key: index, className: 'font-bold mt-4 mb-2 text-amber-400' }, text);
    }
    return <p key={index} className="mb-2">{line}</p>;
  });


  return (
    <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-gray-700/50 lg:col-span-1 h-full flex flex-col">
      <h2 className="text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2">
        <SparklesIcon className="h-6 w-6" />
        Uşak Gezi Rehberi
      </h2>
      <p className="text-gray-400 mb-4">Ne yapmak istersiniz? Örn: "Uşak'ta gezilecek tarihi yerler"</p>
      
      <form onSubmit={handleGetSuggestions} className="flex gap-2">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="İsteğinizi yazın..."
          className="flex-grow bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-amber-500 hover:bg-amber-400 disabled:bg-amber-700 text-gray-900 font-bold p-2 rounded-lg transition-colors duration-300"
        >
          {isLoading ? (
            <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
             <SparklesIcon className="h-6 w-6"/>
          )}
        </button>
      </form>
      
      <div className="mt-4 flex-grow bg-gray-900/50 p-4 rounded-lg min-h-[200px] border border-gray-700 overflow-y-auto">
        {isLoading && <p className="text-gray-400">Önerileriniz hazırlanıyor...</p>}
        {error && <p className="text-red-400">{error}</p>}
        {suggestion && <div className="prose prose-invert prose-sm max-w-none text-gray-300">{formattedSuggestion}</div>}
         {!isLoading && !suggestion && !error && <p className="text-gray-500">Uşak'ı keşfetmek için yapay zeka destekli rehberimizden yardım alın.</p>}
      </div>
    </div>
  );
};

export default TripPlanner;
