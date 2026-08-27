
import React from 'react';

const reasons = [
  { icon: '🌟', text: 'You inspire me to be a better person every day.' },
  { icon: '🍯', text: 'Your voice is the sweetest sound I’ve ever heard.' },
  { icon: '🛡️', text: 'Being with you feels like the safest place on earth.' },
  { icon: '🎨', text: 'You paint my world in colors I didn’t know existed.' },
  { icon: '🔥', text: 'Your passion for life is absolutely contagious.' },
  { icon: '👑', text: 'You carry yourself with a grace that is truly royal.' },
];

const ReasonsSection: React.FC = () => {
  return (
    <section id="reasons" className="py-20 px-4 bg-white relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-2">Why Onyi Is My Queen</h2>
          <p className="text-rose-500 font-medium tracking-widest uppercase text-sm">A never-ending list</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-3xl bg-rose-50/50 border border-rose-100 hover:bg-rose-100 transition-colors flex flex-col items-center text-center group"
            >
              <div className="text-4xl mb-4 transform transition-transform group-hover:scale-125 duration-300">
                {reason.icon}
              </div>
              <p className="text-gray-700 font-medium leading-relaxed italic">
                "{reason.text}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 font-light italic text-lg">...and a million more reasons I discover every time you smile, Onyi.</p>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
