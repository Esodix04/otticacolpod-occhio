import React from 'react';
import { Link } from 'react-router-dom';
import { Gift } from 'lucide-react';

export default function Home() {
  const prizes = [
    { title: 'Sconto 30% in Negozio', path: '/store-discount', color: 'bg-blue-500' },
    { title: 'Sconto 30% Occhiali Bambino', path: '/kids-sunglasses', color: 'bg-pink-500' },
    { title: 'Offerta 3x2 Foto 10x15', path: '/photo-prints', color: 'bg-purple-500' },
    { title: 'Sconto Lenti Antiriflesso', path: '/blue-light', color: 'bg-indigo-500' },
    { title: 'Sconto 20% Lenti a Contatto', path: '/contact-lenses', color: 'bg-green-500' },
    { title: 'Sconto 30% Occhiali da Sole', path: '/sunglasses', color: 'bg-yellow-500' },
    { title: '2x1 Lenti Monofocali', path: '/monofocal-lenses', color: 'bg-red-500' },
    { title: 'Sconto 50% Secondo Paio', path: '/second-pair', color: 'bg-teal-500' },
    { title: 'Kit Pulizia in Omaggio', path: '/cleaning-kit', color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Benvenuti da Ottica Colpo D'Occhio</h1>
        <p className="text-xl text-gray-600">Scopri le nostre fantastiche offerte!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {prizes.map((prize) => (
          <Link
            key={prize.path}
            to={prize.path}
            className="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105"
          >
            <div className={`${prize.color} p-6 h-full`}>
              <div className="absolute top-3 right-3">
                <Gift className="h-6 w-6 text-white opacity-50" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-2">{prize.title}</h3>
                <p className="text-white/80">Clicca per i dettagli</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}