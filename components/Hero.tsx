
import React from 'react';

import onyiUkImage from '../together/onyi-uk.jpeg';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <div className="z-10 animate-fade-in-up">
        <h2 className="text-rose-500 font-script text-3xl md:text-5xl mb-4">Forever & Always</h2>
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-gray-800 leading-tight mb-6">
          To My <span className="text-rose-600">Onyi</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Every moment with you, Onyi, is a fairy tale come true. This space is a living testament to the love, 
          admiration, and devotion I carry for you in every breath.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-rose-600 text-white rounded-full font-semibold shadow-lg hover:bg-rose-700 transition-all transform hover:scale-105"
          >
            Our Memories
          </button>
          <button 
            onClick={() => document.getElementById('letters')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white text-rose-600 border border-rose-200 rounded-full font-semibold shadow-sm hover:shadow-md transition-all transform hover:scale-105"
          >
            Love Letters
          </button>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl opacity-10 pointer-events-none">
        <img src={onyiUkImage} alt="background decorative" className="w-full h-auto rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
