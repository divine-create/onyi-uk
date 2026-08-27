
import React, { useState } from 'react';
import { generateLoveLetter } from '../services/geminiService';

const LoveLetterGenerator: React.FC = () => {
  const [mood, setMood] = useState('Passionate');
  const [highlights, setHighlights] = useState('');
  const [letter, setLetter] = useState('');
  const [loading, setLoading] = useState(false);

  const moods = ['Passionate', 'Soft & Sweet', 'Deeply Emotional', 'Playful', 'Grateful'];

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateLoveLetter(mood, highlights);
    setLetter(result || '');
    setLoading(false);
  };

  return (
    <section id="letters" className="py-20 px-4 bg-rose-50/80 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Eternal Echoes</h2>
          <p className="text-gray-600 font-light">Craft a message as unique as our love using our AI Heartbeat Engine.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-rose-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Choose a Vibe</label>
              <div className="flex flex-wrap gap-2">
                {moods.map((m) => (
                  <button
                    key={m}
                    onClick={() => setMood(m)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      mood === m ? 'bg-rose-600 text-white' : 'bg-rose-50 text-rose-600 hover:bg-rose-100'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Special Memories?</label>
              <input
                type="text"
                value={highlights}
                onChange={(e) => setHighlights(e.target.value)}
                placeholder="e.g., our first picnic, the rainy Tuesday..."
                className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-gray-700 transition-all"
              />
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className={`w-full py-4 rounded-2xl font-bold text-white shadow-lg transition-all ${
              loading ? 'bg-rose-400 cursor-not-allowed' : 'bg-rose-600 hover:bg-rose-700 active:scale-95'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Channeling the Stars...
              </span>
            ) : 'Generate My Letter'}
          </button>

          {letter && (
            <div className="mt-12 p-8 bg-rose-50/50 rounded-2xl border-l-4 border-rose-500 animate-fade-in relative">
              <div className="absolute top-4 right-6 opacity-10 text-rose-500 pointer-events-none">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <p className="text-gray-800 font-serif text-lg leading-relaxed whitespace-pre-wrap">
                {letter}
              </p>
              <div className="mt-8 text-right italic font-script text-2xl text-rose-600">
                With all my love, forever.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoveLetterGenerator;
