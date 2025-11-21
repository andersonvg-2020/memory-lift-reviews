
import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import WhatIs from '@/components/sections/WhatIs';
import Worth2025 from '@/components/sections/Worth2025';
import Pros from '@/components/sections/Pros';
import HowItWorks from '@/components/sections/HowItWorks';
import Ingredients from '@/components/sections/Ingredients';
import Safety from '@/components/sections/Safety';
import Benefits from '@/components/sections/Benefits';
import Conclusion from '@/components/sections/Conclusion';
import FAQ from '@/components/sections/FAQ';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Memory Lift Review 2025 - Does It Really Work? Honest Analysis</title>
        <meta name="description" content="Comprehensive Memory Lift supplement review for 2025. Discover ingredients, benefits, side effects, and real user experiences. Is Memory Lift worth your investment?" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Navigation />
        
        <main className="pt-20">
          <Hero />
          <WhatIs />
          <Worth2025 />
          <Pros />
          <HowItWorks />
          <Ingredients />
          <Safety />
          <Benefits />
          <Conclusion />
          <FAQ />
        </main>

        <footer className="bg-slate-900 text-white py-12 mt-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-slate-400 mb-4">
              Disclaimer: This is a review website. Results may vary. Consult your healthcare provider before starting any supplement.
            </p>
            <p className="text-slate-500 text-sm">
              © 2025 Memory Lift Review. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>

      
      <Toaster />
    </>
  );
}

export default App;
