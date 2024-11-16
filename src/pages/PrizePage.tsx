import React from 'react';
import { Instagram } from 'lucide-react';

interface PrizePageProps {
  title: string;
  description: string;
  image: string;
  color: string;
}

export default function PrizePage({ title, description, image, color }: PrizePageProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className={`rounded-xl overflow-hidden shadow-lg ${color}`}>
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="bg-white p-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          
          <p className="mt-4 text-lg text-gray-600">{description}</p>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2 text-gray-700">
              <Instagram className="h-5 w-5" />
              <p className="font-medium">Per riscattare questa offerta:</p>
            </div>
            <p className="mt-2 text-gray-600">Segui il nostro profilo Instagram @otticacolpodocchio per rimanere aggiornato sulle ultime offerte e novità!</p>
          </div>
          
          <div className="mt-8 flex justify-center">
            <a 
              href="https://www.instagram.com/otticacolpodocchio/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${color} text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition-opacity flex items-center gap-2`}
            >
              <Instagram className="h-5 w-5" />
              Richiedi Ora su Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}