
import React from 'react';
import Hero from './components/Hero';
import MemoryGallery from './components/MemoryGallery';
import LoveLetterGenerator from './components/LoveLetterGenerator';
import ReasonsSection from './components/ReasonsSection';
import FloatingHearts from './components/FloatingHearts';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import JourneyStats from './components/JourneyStats';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <FloatingHearts />
      <MusicPlayer />
      
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-white/30 backdrop-blur-md border-b border-white/20">
        <div className="text-rose-600 font-serif font-bold text-2xl tracking-tighter">
          OS <span className="text-rose-300 font-light">| Onyi's Sanctuary</span>
        </div>
        <div className="hidden md:flex gap-8 items-center text-sm font-semibold text-gray-700 uppercase tracking-widest">
          <a href="#gallery" className="hover:text-rose-600 transition-colors">Gallery</a>
          <a href="#letters" className="hover:text-rose-600 transition-colors">Letters</a>
          <a href="#reasons" className="hover:text-rose-600 transition-colors">Reasons</a>
        </div>
        <button className="px-5 py-2 bg-rose-600 text-white rounded-full text-sm font-bold shadow-md hover:bg-rose-700 transition-all">
          Onyi's Love
        </button>
      </nav>

      <main>
        <Hero />
        
        {/* New Journey Stats Section */}
        <JourneyStats />
        
        {/* Quote Break */}
        <div className="py-20 text-center relative z-10">
          <blockquote className="max-w-3xl mx-auto px-4">
            <p className="text-2xl md:text-4xl font-serif italic text-gray-700 leading-relaxed">
              "To the world, Onyi, you may be one person, but to me, you are the entire world."
            </p>
            <footer className="mt-6 text-rose-500 font-script text-3xl">— Forever Your Servant</footer>
          </blockquote>
        </div>

        <MemoryGallery />
        <LoveLetterGenerator />
        <ReasonsSection />
        
        {/* Call to Action Section */}
        <section className="py-32 bg-rose-600 text-white relative z-10 overflow-hidden text-center">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grad1)" />
              <defs>
                <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" style={{stopColor:'rgb(255,255,255)', stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'rgb(225,29,72)', stopOpacity:1}} />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <div className="relative z-10 px-4">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready to grow old together, Onyi?</h2>
            <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto opacity-90">
              There is no finish line in our story, only new chapters filled with more love than the last.
            </p>
            <div className="flex justify-center gap-4">
              <span className="text-6xl animate-bounce">💍</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Persistent Floating Hearts button for interaction */}
      <button 
        onClick={() => {
          const heart = document.createElement('div');
          heart.innerText = '❤';
          heart.style.position = 'fixed';
          heart.style.left = Math.random() * 100 + 'vw';
          heart.style.bottom = '0';
          heart.style.fontSize = Math.random() * 20 + 20 + 'px';
          heart.style.color = '#e11d48';
          heart.style.transition = 'transform 3s ease-out, opacity 3s ease-out';
          heart.style.zIndex = '1000';
          document.body.appendChild(heart);
          
          setTimeout(() => {
            heart.style.transform = `translateY(-100vh) rotate(${Math.random() * 360}deg)`;
            heart.style.opacity = '0';
          }, 100);
          
          setTimeout(() => {
            document.body.removeChild(heart);
          }, 3000);
        }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-rose-700 transition-all transform hover:scale-110 active:scale-90 z-[60]"
      >
        <span className="text-2xl">❤</span>
      </button>
    </div>
  );
};

export default App;
