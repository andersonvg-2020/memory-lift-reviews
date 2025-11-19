
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pros = () => {
  const pros = [
    'Scientifically-backed ingredients with proven efficacy',
    'Noticeable improvements in memory and focus',
    'No harmful side effects or stimulants',
    'Manufactured in FDA-approved facilities',
    '60-day money-back guarantee',
    'Free shipping on all orders',
    'Supports long-term brain health',
    'Easy-to-swallow capsules',
    'Transparent ingredient labeling',
    'Positive customer reviews and testimonials'
  ];

  const cons = [
    'Only available through official website',
    'Results may vary between individuals',
    'Requires consistent daily use for best results',
    'Premium pricing compared to basic supplements'
  ];

  return (
    <section id="pros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Pros & Cons: The Complete Picture
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We believe in transparency. Here's an honest assessment of Memory Lift's strengths and limitations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-xl"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <CheckCircle2 className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">Pros</h3>
            </div>

            <ul className="space-y-4">
              {pros.map((pro, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-700">{pro}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-xl"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                <XCircle className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">Cons</h3>
            </div>

            <ul className="space-y-4">
              {cons.map((con, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start space-x-3"
                >
                  <XCircle className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-700">{con}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-white rounded-lg border-2 border-orange-200">
              <p className="text-sm text-slate-600">
                <span className="font-semibold">Note:</span> The cons are minimal and mostly relate to availability and individual variation—not product quality or safety.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl shadow-xl text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">The Bottom Line</h3>
          <p className="text-xl mb-6 opacity-90">
            The pros significantly outweigh the cons. Memory Lift delivers on its promises with minimal drawbacks.
          </p>
          <Button
            onClick={() => window.open('https://brainhealthfocus.online/mlt-tsl-cart-aff-fr150-4b-pa/?afid=7QxNTjlbQU', '_blank')}
            className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-6 text-lg rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Try Memory Lift Risk-Free
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pros;
