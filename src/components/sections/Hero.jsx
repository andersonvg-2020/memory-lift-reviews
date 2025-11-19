import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  return <section id="hero" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-70" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }}>
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Award size={18} />
              <span className="text-sm font-semibold">2025 Editor's Choice</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Memory Lift Review: The Truth About This Brain Supplement
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              An honest, comprehensive analysis of Memory Lift's ingredients, benefits, and real-world results. Discover if this cognitive enhancer lives up to the hype in 2025.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <span className="text-slate-700 font-semibold">4.8/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600">
                <TrendingUp size={20} className="text-green-600" />
                <span>10,000+ Satisfied Users</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => window.open('https://brainhealthfocus.online/mlt-tsl-cart-aff-fr150-4b-pa/?afid=7QxNTjlbQU', '_blank')} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Try Memory Lift Risk-Free
              </Button>
              <Button onClick={() => {
              const element = document.getElementById('what-is');
              if (element) {
                element.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }} variant="outline" className="px-8 py-6 text-lg rounded-lg font-semibold border-2 border-slate-300 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300">
                Read Full Review
              </Button>
            </div>

            <div className="flex items-center space-x-2 mt-6 text-sm text-slate-500">
              <Shield size={16} className="text-green-600" />
              <span>60-Day Money-Back Guarantee • Free Shipping</span>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img alt="Memory Lift supplement bottle with brain health ingredients" className="w-full h-auto" src="https://horizons-cdn.hostinger.com/7548378e-afde-437f-b286-fa169aa34ecf/mltwebp1-3imoU.webp" />
              
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                In Stock
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <motion.div whileHover={{
              scale: 1.05
            }} className="bg-white p-4 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                <div className="text-xs text-slate-600">Natural</div>
              </motion.div>
              <motion.div whileHover={{
              scale: 1.05
            }} className="bg-white p-4 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-1">60</div>
                <div className="text-xs text-slate-600">Day Guarantee</div>
              </motion.div>
              <motion.div whileHover={{
              scale: 1.05
            }} className="bg-white p-4 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">FDA</div>
                <div className="text-xs text-slate-600">Approved Facility</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;