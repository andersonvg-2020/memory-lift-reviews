import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const sections = [{
    id: 'hero',
    label: 'Overview'
  }, {
    id: 'what-is',
    label: 'What Is It?'
  }, {
    id: 'worth-2025',
    label: 'Worth in 2025?'
  }, {
    id: 'pros',
    label: 'Pros & Cons'
  }, {
    id: 'how-it-works',
    label: 'How It Works'
  }, {
    id: 'ingredients',
    label: 'Ingredients'
  }, {
    id: 'safety',
    label: 'Safety'
  }, {
    id: 'benefits',
    label: 'Benefits'
  }, {
    id: 'conclusion',
    label: 'Conclusion'
  }, {
    id: 'faq',
    label: 'FAQ'
  }];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));
      const currentSection = sectionElements.find(({
        element
      }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };
  return <>
      <motion.nav initial={{
      y: -100
    }} animate={{
      y: 0
    }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <motion.div whileHover={{
            scale: 1.05
          }} className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">ML</span>
              </div>
              <span className="text-xl font-bold text-slate-900">Memory Lift - Reviews 2025</span>
            </motion.div>

            <div className="hidden lg:flex items-center space-x-1">
              {sections.slice(0, 6).map(section => <button key={section.id} onClick={() => scrollToSection(section.id)} className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === section.id ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>
                  {section.label}
                </button>)}
            </div>

            <div className="hidden lg:block">
              <Button onClick={() => window.open('https://brainhealthfocus.online/mlt-tsl-cart-aff-fr150-4b-pa/?afid=7QxNTjlbQU', '_blank')} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Get Memory Lift Now
              </Button>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        x: '100%'
      }} animate={{
        opacity: 1,
        x: 0
      }} exit={{
        opacity: 0,
        x: '100%'
      }} transition={{
        type: 'spring',
        damping: 25
      }} className="fixed inset-y-0 right-0 z-40 w-80 bg-white shadow-2xl lg:hidden overflow-y-auto">
            <div className="p-6 pt-24">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                {sections.map(section => <button key={section.id} onClick={() => scrollToSection(section.id)} className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all duration-200 ${activeSection === section.id ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-100'}`}>
                    <span className="font-medium">{section.label}</span>
                    <ChevronRight size={18} />
                  </button>)}
              </nav>
              <Button onClick={() => window.open('https://brainhealthfocus.online/mlt-tsl-cart-aff-fr150-4b-pa/?afid=7QxNTjlbQU', '_blank')} className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-lg font-semibold shadow-lg">
                Get Memory Lift Now
              </Button>
            </div>
          </motion.div>}
      </AnimatePresence>

      {isOpen && <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/50 z-30 lg:hidden" />}
    </>;
};
export default Navigation;