
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Beaker, Award } from 'lucide-react';

const Ingredients = () => {
  const ingredients = [
    {
      name: 'Bacopa Monnieri',
      amount: '300mg',
      benefit: 'Enhances memory formation and recall, reduces anxiety',
      research: 'Proven in 9+ clinical trials'
    },
    {
      name: 'Lion\'s Mane Mushroom',
      amount: '500mg',
      benefit: 'Stimulates nerve growth factor, supports neuroplasticity',
      research: 'Backed by neuroscience research'
    },
    {
      name: 'Phosphatidylserine',
      amount: '100mg',
      benefit: 'Supports cell membrane health, improves cognitive function',
      research: 'FDA-qualified health claim'
    },
    {
      name: 'Ginkgo Biloba',
      amount: '120mg',
      benefit: 'Increases blood flow to brain, powerful antioxidant',
      research: 'Used for centuries, clinically validated'
    },
    {
      name: 'Rhodiola Rosea',
      amount: '250mg',
      benefit: 'Reduces mental fatigue, enhances focus under stress',
      research: 'Adaptogenic properties proven'
    },
    {
      name: 'Alpha-GPC',
      amount: '150mg',
      benefit: 'Boosts acetylcholine levels, enhances learning',
      research: 'Highly bioavailable choline source'
    },
    {
      name: 'L-Theanine',
      amount: '200mg',
      benefit: 'Promotes calm focus, reduces stress without drowsiness',
      research: 'Synergistic with other nootropics'
    },
    {
      name: 'Huperzine A',
      amount: '50mcg',
      benefit: 'Protects acetylcholine, supports memory retention',
      research: 'Neuroprotective properties'
    }
  ];

  return (
    <section id="ingredients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Premium Ingredients, Proven Results
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Memory Lift contains a carefully calibrated blend of the most effective nootropic ingredients, each selected for its proven cognitive benefits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl text-center"
          >
            <Leaf className="mx-auto mb-4 text-green-600" size={48} />
            <h3 className="text-xl font-bold text-slate-900 mb-2">100% Natural</h3>
            <p className="text-slate-600">All ingredients sourced from nature, no synthetic additives</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl text-center"
          >
            <Beaker className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Clinically Tested</h3>
            <p className="text-slate-600">Every ingredient backed by scientific research</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl text-center"
          >
            <Award className="mx-auto mb-4 text-purple-600" size={48} />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Premium Quality</h3>
            <p className="text-slate-600">Highest purity standards, third-party tested</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-xl font-bold text-slate-900">{ingredient.name}</h4>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {ingredient.amount}
                </span>
              </div>
              <p className="text-slate-700 mb-2">{ingredient.benefit}</p>
              <p className="text-sm text-blue-600 font-medium">{ingredient.research}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Synergistic Formula</h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            These ingredients don't just work individually—they work together synergistically to provide comprehensive cognitive support that's greater than the sum of its parts.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Ingredients;
