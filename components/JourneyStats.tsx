
import React, { useState, useEffect } from 'react';

const JourneyStats: React.FC = () => {
  const datingStartDate = new Date('2025-12-12T00:00:00');
  const marriageDate = new Date('2026-12-12T00:00:00');

  const [timeLeft, setTimeLeft] = useState({
    daysInLove: 0,
    daysToMarriage: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      
      // Calculate days in love
      const diffInLove = now.getTime() - datingStartDate.getTime();
      // Ensure we don't show negative days if dating hasn't started yet
      const daysInLove = Math.max(0, Math.floor(diffInLove / (1000 * 60 * 60 * 24)));

      // Calculate countdown to marriage
      const diffToMarriage = marriageDate.getTime() - now.getTime();
      
      if (diffToMarriage > 0) {
        setTimeLeft({
          daysInLove,
          daysToMarriage: Math.floor(diffToMarriage / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diffToMarriage / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diffToMarriage / 1000 / 60) % 60),
          seconds: Math.floor((diffToMarriage / 1000) % 60)
        });
      } else {
        setTimeLeft(prev => ({ ...prev, daysInLove, daysToMarriage: 0, hours: 0, minutes: 0, seconds: 0 }));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="journey" className="py-16 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Days in Love Card */}
          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-rose-100 flex flex-col items-center text-center transform hover:scale-[1.02] transition-transform">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">💝</span>
            </div>
            <h3 className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-2">Days in Love</h3>
            <div className="text-5xl md:text-6xl font-serif font-bold text-rose-600 mb-2">
              {timeLeft.daysInLove.toLocaleString()}
            </div>
            <p className="text-gray-600 italic">Since December 12th, 2025</p>
            <div className="mt-4 h-1 w-12 bg-rose-200 rounded-full"></div>
          </div>

          {/* Marriage Countdown Card */}
          <div className="bg-rose-600 rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center text-white transform hover:scale-[1.02] transition-transform relative overflow-hidden">
             {/* Decorative Ring Background */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">💍</span>
            </div>
            <h3 className="text-rose-100 uppercase tracking-widest text-xs font-bold mb-2">Counting Down to "I Do"</h3>
            <div className="text-5xl md:text-6xl font-serif font-bold mb-4">
              {timeLeft.daysToMarriage} <span className="text-xl">Days</span>
            </div>
            
            <div className="flex gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-[10px] uppercase opacity-70">Hrs</div>
              </div>
              <div className="text-2xl font-light opacity-50">:</div>
              <div>
                <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-[10px] uppercase opacity-70">Min</div>
              </div>
              <div className="text-2xl font-light opacity-50">:</div>
              <div>
                <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-[10px] uppercase opacity-70">Sec</div>
              </div>
            </div>
            
            <p className="mt-6 text-rose-100 font-medium italic">Our Big Day: Dec 12, 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyStats;
