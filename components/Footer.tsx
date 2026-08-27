
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-rose-100 relative z-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-6">
          <span className="text-rose-500 text-3xl">👑</span>
        </div>
        <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">Onyi, You Are My Everything</h3>
        <p className="text-gray-500 font-light mb-8">Built with pure love and devotion for the one and only Onyi.</p>
        <div className="flex justify-center gap-6 text-gray-400 mb-8">
          <span className="hover:text-rose-500 cursor-default transition-colors">Respect</span>
          <span className="text-rose-200">|</span>
          <span className="hover:text-rose-500 cursor-default transition-colors">Adoration</span>
          <span className="text-rose-200">|</span>
          <span className="hover:text-rose-500 cursor-default transition-colors">Commitment</span>
        </div>
        <p className="text-xs text-gray-400 uppercase tracking-widest">
          © {new Date().getFullYear()} Dedicated to Onyi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
