import React from 'react';
import Header from './components/Header';
import FareCalculator from './components/FareCalculator';
import TripPlanner from './components/TripPlanner';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans antialiased">
      <div className="relative isolate overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-10" 
          style={{ backgroundImage: `url('https://picsum.photos/seed/usaktaxi/1920/1080')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900 z-0"></div>
        
        <div className="relative z-10">
          <Header />
          <main className="container mx-auto px-4 py-12 sm:py-16 lg:py-24">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Uşak'ın Güvenilir Taksisi <a href="tel:+905324996469" className="text-amber-400 hover:text-amber-300 transition-colors">0532 499 64 69</a>
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                Hızlı, konforlu ve 7/24 hizmetinizde. Gideceğiniz yere güvenle ulaşın.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="space-y-8">
                <FareCalculator />
              </div>
              <TripPlanner />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;