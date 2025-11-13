
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Brain,
      title: 'Neurotransmitter Support',
      description: 'Key ingredients boost acetylcholine and dopamine production, essential for memory formation and recall.',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'Enhanced Blood Flow',
      description: 'Improves cerebral circulation, delivering more oxygen and nutrients to brain cells for optimal function.',
      color: 'from-indigo-600 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Neuroprotection',
      description: 'Powerful antioxidants protect brain cells from oxidative stress and age-related cognitive decline.',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: TrendingUp,
      title: 'Neuroplasticity Boost',
      description: 'Supports the brain\'s ability to form new neural connections, enhancing learning and adaptation.',
      color: 'from-pink-600 to-red-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How Memory Lift Works
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Memory Lift uses a multi-pathway approach to enhance cognitive function, targeting the key mechanisms that support brain health and mental performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6`}>
                  <step.icon size={32} />
                </div>
                
                <div className="absolute top-4 right-4 text-6xl font-bold text-white/10">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-blue-100 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
        >
          <h3 className="text-3xl font-bold mb-6 text-center">The Science Behind the Formula</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">30+</div>
              <p className="text-blue-100">Clinical Studies</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-400 mb-2">12</div>
              <p className="text-blue-100">Active Ingredients</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">100%</div>
              <p className="text-blue-100">Natural Formula</p>
            </div>
          </div>

          <p className="text-center text-blue-100 mt-8 max-w-3xl mx-auto">
            Each ingredient in Memory Lift has been carefully selected based on extensive research and clinical trials demonstrating its effectiveness in supporting cognitive function and brain health.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
