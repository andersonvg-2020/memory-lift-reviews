
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Target, TrendingUp, Clock, Users, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Benefits = () => {
  const benefits = [
    {
      icon: Brain,
      title: 'Enhanced Memory',
      description: 'Improve both short-term and long-term memory retention and recall',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'Sharper Focus',
      description: 'Maintain concentration for longer periods without mental fatigue',
      color: 'from-indigo-600 to-blue-600'
    },
    {
      icon: Target,
      title: 'Mental Clarity',
      description: 'Experience clearer thinking and faster information processing',
      color: 'from-purple-600 to-indigo-600'
    },
    {
      icon: TrendingUp,
      title: 'Cognitive Performance',
      description: 'Boost overall brain function and mental agility',
      color: 'from-pink-600 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Reduced Brain Fog',
      description: 'Eliminate mental cloudiness and improve decision-making',
      color: 'from-orange-600 to-pink-600'
    },
    {
      icon: Users,
      title: 'Better Learning',
      description: 'Enhance your ability to learn and retain new information',
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: Heart,
      title: 'Stress Reduction',
      description: 'Support healthy stress response and mental resilience',
      color: 'from-red-600 to-orange-600'
    },
    {
      icon: Star,
      title: 'Long-Term Brain Health',
      description: 'Protect against age-related cognitive decline',
      color: 'from-yellow-600 to-orange-600'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Transform Your Mental Performance
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience comprehensive cognitive enhancement across multiple dimensions of brain function.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center mb-4`}>
                <benefit.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-600 to-indigo-600 p-12 rounded-2xl shadow-2xl text-white"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Real Results, Real People</h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <p className="italic mb-2">"My memory has improved dramatically. I can remember names and details I would have forgotten before."</p>
                  <p className="text-sm text-blue-200">- Sarah M., 45</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <p className="italic mb-2">"I'm more focused at work and my productivity has skyrocketed. Best supplement I've ever tried."</p>
                  <p className="text-sm text-blue-200">- James T., 52</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <p className="italic mb-2">"The brain fog is gone. I feel sharp and clear-headed throughout the day."</p>
                  <p className="text-sm text-blue-200">- Linda K., 38</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <div className="text-6xl font-bold mb-2">94%</div>
                <p className="text-xl text-blue-100">Users Report Noticeable Improvements</p>
              </div>
              <div className="mb-8">
                <div className="text-5xl font-bold mb-2">2-4 Weeks</div>
                <p className="text-lg text-blue-100">Average Time to See Results</p>
              </div>
              <Button
                onClick={() => window.open('https://brainhealthfocus.online/mlt-tsl-cart-aff-fr150-4b-pa/?afid=7QxNTjlbQU', '_blank')}
                className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-6 text-lg rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Start Your Transformation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
