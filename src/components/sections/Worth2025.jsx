import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Worth2025 = () => {
  const stats = [{
    icon: TrendingUp,
    value: '94%',
    label: 'User Satisfaction Rate'
  }, {
    icon: Users,
    value: '10K+',
    label: 'Active Users'
  }, {
    icon: Award,
    value: '#1',
    label: 'Rated Brain Supplement'
  }, {
    icon: DollarSign,
    value: '$1.99',
    label: 'Per Day Cost'
  }];
  return <section id="worth-2025" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
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
          <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold mb-6">
            2025 Analysis
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Is Memory Lift Worth It in 2025?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            With countless brain supplements flooding the market, we analyzed Memory Lift's value proposition, effectiveness, and real-world results to answer this critical question.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-white" size={28} />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
            </motion.div>)}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
            <img alt="Happy customer using Memory Lift supplement" className="w-full rounded-2xl shadow-xl" src="https://horizons-cdn.hostinger.com/7548378e-afde-437f-b286-fa169aa34ecf/polaroid-mobile_3-aJiwy.webp" />
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
            <h3 className="text-3xl font-bold text-slate-900">
              The Verdict: A Resounding Yes
            </h3>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
                <h4 className="font-bold text-lg text-slate-900 mb-2">✓ Proven Ingredients</h4>
                <p className="text-slate-600">
                  Every component is backed by clinical research and proven to support cognitive function.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                <h4 className="font-bold text-lg text-slate-900 mb-2">✓ Exceptional Value</h4>
                <p className="text-slate-600">
                  At less than $2 per day, Memory Lift offers premium quality at an affordable price point.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500">
                <h4 className="font-bold text-lg text-slate-900 mb-2">✓ Risk-Free Trial</h4>
                <p className="text-slate-600">
                  60-day money-back guarantee means you can try it completely risk-free.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
                <h4 className="font-bold text-lg text-slate-900 mb-2">✓ Real Results</h4>
                <p className="text-slate-600">
                  Thousands of verified users report noticeable improvements in memory and focus.
                </p>
              </div>
            </div>

            <Button onClick={() => window.open('https://brainhealthfocus.online/mlt-tsl-cart-aff-fr150-4b-pa/?afid=7QxNTjlbQU', '_blank')} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 text-lg rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
              Get Memory Lift Today
            </Button>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Worth2025;