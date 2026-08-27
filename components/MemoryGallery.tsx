
import React from 'react';
import { Memory } from '../types';

import onyiUkImage from '../together/onyi-uk.jpeg';
import img1 from '../together/670912389_18040391969716587_5274454571070615870_n.jpg';
import img2 from '../together/735909159_1036535908792356_4749825635568732570_n.jpg';
import img3 from '../together/Screenshot 2026-08-27 183442.png';
import img4 from '../together/485981732_671262061986411_6746469446143006103_n.jpg';
import img5 from '../together/583330869_854366783675937_8831016272724064080_n.jpg';
import img6 from '../together/669598104_967479532364661_2575627374349437755_n.jpg';
import img7 from '../together/485143481_670927442019873_9065528681345026858_n.jpg';

const memories: Memory[] = [
  { id: '1', title: 'Endless Devotion', description: '"In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."', imageUrl: onyiUkImage, date: 'Recent' },
  { id: '2', title: 'Soulmates', description: '"I look at you and see the rest of my life in front of my eyes."', imageUrl: img1, date: 'Always' },
  { id: '3', title: 'My Everything', description: '"If I know what love is, it is because of you."', imageUrl: img2, date: 'Always' },
  { id: '4', title: 'Forever Yours', description: '"I love you not only for what you are, but for what I am when I am with you."', imageUrl: img3, date: 'Always' },
  { id: '5', title: 'True Love', description: '"You are my today and all of my tomorrows."', imageUrl: img4, date: 'Always' },
  { id: '6', title: 'My Sunshine', description: '"To the world you may be one person, but to one person you are the world."', imageUrl: img5, date: 'Always' },
  { id: '7', title: 'Infinite Affection', description: '"I swear I couldn\'t love you more than I do right now, and yet I know I will tomorrow."', imageUrl: img6, date: 'Always' },
  { id: '8', title: 'Unconditional', description: '"There is no remedy for love but to love more."', imageUrl: img7, date: 'Always' }
];

const MemoryGallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 px-4 bg-white/50 backdrop-blur-sm relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-2">Captured Moments</h2>
          <div className="h-1 w-20 bg-rose-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((mem) => (
            <div key={mem.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img src={mem.imageUrl} alt={mem.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-sm font-medium">{mem.date}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{mem.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{mem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryGallery;
