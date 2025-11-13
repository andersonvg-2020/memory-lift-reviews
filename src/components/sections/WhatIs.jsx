import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Target, Sparkles } from 'lucide-react';
const WhatIs = () => {
  const features = [{
    icon: Brain,
    title: 'Cognitive Enhancement',
    description: 'Scientifically formulated to support memory, focus, and mental clarity'
  }, {
    icon: Zap,
    title: 'Fast-Acting Formula',
    description: 'Notice improvements in mental performance within weeks'
  }, {
    icon: Target,
    title: 'Precision Ingredients',
    description: 'Carefully selected nootropics backed by clinical research'
  }, {
    icon: Sparkles,
    title: 'Premium Quality',
    description: 'Manufactured in FDA-approved facilities with strict quality control'
  }];
  return <section id="what-is" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Is Memory Lift?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Memory Lift is a premium cognitive enhancement supplement designed to support brain health, improve memory retention, and boost mental performance through a scientifically-backed blend of natural nootropics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <img alt="Memory Lift supplement facts and ingredients label" className="w-full rounded-2xl shadow-xl" src="https://horizons-cdn.hostinger.com/7548378e-afde-437f-b286-fa169aa34ecf/chatgpt-image-20-de-out.-de-2025-12_33_08-683x1024-BE6JP.webp" />
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              A Revolutionary Approach to Brain Health
            </h3>
            
            <p className="text-lg text-slate-700 leading-relaxed">
              Unlike generic brain supplements, Memory Lift combines cutting-edge neuroscience with traditional herbal wisdom. Each capsule contains a proprietary blend of clinically-studied ingredients that work synergistically to:
            </p>

            <ul className="space-y-3">
              {['Enhance short and long-term memory', 'Improve focus and concentration', 'Support healthy brain aging', 'Boost mental energy and clarity', 'Reduce brain fog and mental fatigue'].map((item, index) => <motion.li key={index} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: index * 0.1
            }} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </motion.li>)}
            </ul>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} whileHover={{
          y: -5
        }} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default WhatIs;