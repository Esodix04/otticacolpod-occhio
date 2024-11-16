import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PrizePage from './pages/PrizePage';

function App() {
  const prizes = {
    storeDiscount: {
      title: "Sconto 30% in Negozio",
      description: "Approfitta di uno sconto del 30% sul tuo prossimo acquisto in negozio. Valido su tutti gli articoli a prezzo pieno.",
      image: "https://images.unsplash.com/photo-1556015048-4d3aa10df74c?auto=format&fit=crop&q=80",
      color: "bg-blue-500"
    },
    kidsSunglasses: {
      title: "Sconto 30% Occhiali Bambino",
      description: "Proteggi gli occhi dei tuoi bambini con la nostra collezione di occhiali da sole, ora con il 30% di sconto.",
      image: "https://www.superpapa.it/wp-content/uploads/2019/11/bambino-con-occhiali-da-vista.png",
      color: "bg-pink-500"
    },
    photosPrints: {
      title: "Offerta 3x2 Foto 10x15",
      description: "Stampa tre foto formato 10x15 al prezzo di due. Perfetto per conservare i tuoi ricordi più belli.",
      image: "https://images.unsplash.com/photo-1552168324-d612d77725e3?auto=format&fit=crop&q=80",
      color: "bg-purple-500"
    },
    blueLight: {
      title: "Sconto Lenti Antiriflesso",
      description: "Ottieni le lenti con protezione luce blu al prezzo delle lenti antiriflesso standard.",
      image: "https://www.otticavasari.it/wp-content/uploads/2021/11/shutterstock_2001440528-min-300x200.jpg",
      color: "bg-indigo-500"
    },
    contactLenses: {
      title: "Sconto 20% Lenti a Contatto",
      description: "Risparmia il 20% su tutte le lenti a contatto, incluse quelle giornaliere, settimanali e mensili.",
      image: "https://ciaroni.it/wp-content/uploads/2024/06/lenti-a-contatto-per-miopia-copertina.jpg",
      color: "bg-green-500"
    },
    sunglasses: {
      title: "Sconto 30% Occhiali da Sole",
      description: "Scegli tra la nostra vasta selezione di occhiali da sole firmati con uno sconto del 30%.",
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80",
      color: "bg-yellow-500"
    },
    monofocalLenses: {
      title: "2x1 Lenti Monofocali",
      description: "Acquista un paio di lenti monofocali e ricevi il secondo paio completamente gratis.",
      image: "https://www.zeiss.it/content/dam/vis-b2c/reference-master/images/products/single-vision-lenses/zeiss-single-vision_stage.jpg/_jcr_content/renditions/original.image_file.1024.512.file/zeiss-single-vision_stage.jpg",
      color: "bg-red-500"
    },
    secondPair: {
      title: "Sconto 50% Secondo Paio",
      description: "Acquista un paio di occhiali e ricevi il 50% di sconto sul secondo paio.",
      image: "https://df5apg8r0m634.cloudfront.net/resources/xlN8cPM25BMtzxkFH9ea5Y3lZqsVXvOxuuE2oGV0.jpg",
      color: "bg-teal-500"
    },
    cleaningKit: {
      title: "Kit Pulizia in Omaggio",
      description: "Ricevi un kit di pulizia completo con panno in microfibra e spray detergente.",
      image: "https://www.easypara.it/media/catalog/product/9/3/93531.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
      color: "bg-orange-500"
    }
  };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store-discount" element={<PrizePage {...prizes.storeDiscount} />} />
          <Route path="/kids-sunglasses" element={<PrizePage {...prizes.kidsSunglasses} />} />
          <Route path="/photo-prints" element={<PrizePage {...prizes.photosPrints} />} />
          <Route path="/blue-light" element={<PrizePage {...prizes.blueLight} />} />
          <Route path="/contact-lenses" element={<PrizePage {...prizes.contactLenses} />} />
          <Route path="/sunglasses" element={<PrizePage {...prizes.sunglasses} />} />
          <Route path="/monofocal-lenses" element={<PrizePage {...prizes.monofocalLenses} />} />
          <Route path="/second-pair" element={<PrizePage {...prizes.secondPair} />} />
          <Route path="/cleaning-kit" element={<PrizePage {...prizes.cleaningKit} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;