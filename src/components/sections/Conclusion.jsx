
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Conclusion = () => {
  return (
    <section id="conclusion" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Final Verdict: Memory Lift Delivers
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            After extensive research and analysis, Memory Lift stands out as a premium cognitive enhancement supplement that truly works.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
          >
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Proven Effectiveness</h3>
            <p className="text-blue-100 text-center">
              Scientifically-backed ingredients with real clinical evidence supporting cognitive enhancement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
          >
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Star size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Premium Quality</h3>
            <p className="text-blue-100 text-center">
              Manufactured to the highest standards with transparent labeling and third-party testing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
          >
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Exceptional Value</h3>
            <p className="text-blue-100 text-center">
              Competitive pricing with a risk-free guarantee makes it an easy decision to try.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-sm p-12 rounded-2xl border border-white/20 text-center"
        >
          <h3 className="text-3xl font-bold mb-6">Our Recommendation</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            If you're looking for a safe, effective way to enhance your cognitive performance, improve memory, and support long-term brain health, Memory Lift is an excellent choice. The combination of proven ingredients, quality manufacturing, and positive user feedback makes it one of the best brain supplements available in 2025.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={32} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold">4.8/5 Overall Rating</span>
          </div>

          <Button
            onClick={() => window.open('https://brainhealthfocus.online/mlt-tsl-cart-aff-fr150-4b-pa/?afid=7QxNTjlbQU', '_blank')}
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-12 py-6 text-xl rounded-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            Get Memory Lift Now - 60-Day Guarantee
          </Button>

          <p className="text-sm text-blue-200 mt-6">
            Limited time offer: Free shipping on all orders
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Conclusion;
