
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle2, AlertCircle, Users } from 'lucide-react';

const Safety = () => {
  const safetyFeatures = [
    {
      icon: Shield,
      title: 'FDA-Approved Facility',
      description: 'Manufactured in a state-of-the-art, FDA-registered facility following strict GMP guidelines'
    },
    {
      icon: CheckCircle2,
      title: 'Third-Party Tested',
      description: 'Every batch is independently tested for purity, potency, and safety by certified laboratories'
    },
    {
      icon: Users,
      title: 'No Reported Side Effects',
      description: 'Thousands of users with no serious adverse reactions reported when taken as directed'
    },
    {
      icon: AlertCircle,
      title: 'Transparent Labeling',
      description: 'Full disclosure of all ingredients and dosages—no proprietary blends hiding what\'s inside'
    }
  ];

  return (
    <section id="safety" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Safety & Quality Assurance
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Your health and safety are our top priorities. Memory Lift meets the highest industry standards for quality and purity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {safetyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-xl"
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-6 text-center">Important Safety Information</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-green-600 mb-4">✓ Safe For Most Adults</h4>
              <ul className="space-y-2 text-slate-700">
                <li>• No stimulants or harsh chemicals</li>
                <li>• Non-habit forming formula</li>
                <li>• Vegan and gluten-free</li>
                <li>• No artificial colors or preservatives</li>
                <li>• Suitable for long-term use</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-orange-600 mb-4">⚠ Precautions</h4>
              <ul className="space-y-2 text-slate-700">
                <li>• Consult doctor if pregnant or nursing</li>
                <li>• Not recommended for children under 18</li>
                <li>• Check with physician if on medications</li>
                <li>• Follow recommended dosage</li>
                <li>• Discontinue if adverse reactions occur</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
            <p className="text-slate-700 text-center">
              <span className="font-bold">Medical Disclaimer:</span> These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a healthcare professional before starting any new supplement regimen.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-green-100 text-green-800 px-6 py-4 rounded-full">
            <Shield size={24} />
            <span className="font-semibold">Certified Safe & Effective by Independent Testing</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Safety;
