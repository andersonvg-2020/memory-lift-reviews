
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How long does it take to see results with Memory Lift?',
      answer: 'Most users report noticeable improvements within 2-4 weeks of consistent use. However, individual results may vary. For optimal benefits, we recommend taking Memory Lift daily for at least 60 days.'
    },
    {
      question: 'Is Memory Lift safe to take with other medications?',
      answer: 'Memory Lift is made from natural ingredients and is generally safe. However, if you are taking prescription medications, we strongly recommend consulting with your healthcare provider before starting any new supplement regimen.'
    },
    {
      question: 'What is the recommended dosage?',
      answer: 'The recommended dosage is 2 capsules per day, preferably taken with a meal. Do not exceed the recommended dose unless directed by a healthcare professional.'
    },
    {
      question: 'Does Memory Lift have any side effects?',
      answer: 'Memory Lift is formulated with natural ingredients and is well-tolerated by most users. No serious side effects have been reported. Some users may experience mild digestive discomfort initially, which typically subsides within a few days.'
    },
    {
      question: 'What is your money-back guarantee?',
      answer: 'We offer a 60-day money-back guarantee. If you\'re not completely satisfied with Memory Lift for any reason, simply return the bottles (even if empty) within 60 days of purchase for a full refund, no questions asked.'
    },
    {
      question: 'Can I take Memory Lift if I\'m pregnant or nursing?',
      answer: 'If you are pregnant, nursing, or planning to become pregnant, please consult with your healthcare provider before taking Memory Lift or any other dietary supplement.'
    },
    {
      question: 'How should I store Memory Lift?',
      answer: 'Store Memory Lift in a cool, dry place away from direct sunlight. Keep the bottle tightly closed and out of reach of children.'
    },
    {
      question: 'Is Memory Lift suitable for vegetarians/vegans?',
      answer: 'Yes! Memory Lift is made with plant-based ingredients and the capsules are vegetarian-friendly. It\'s also gluten-free and contains no artificial colors or preservatives.'
    },
    {
      question: 'How many bottles should I order?',
      answer: 'For best results, we recommend ordering at least a 3-month supply. This allows your body to fully experience the cumulative benefits of the ingredients. Many customers opt for the 6-month supply to take advantage of bulk discounts.'
    },
    {
      question: 'Where is Memory Lift manufactured?',
      answer: 'Memory Lift is manufactured in the USA in an FDA-registered facility that follows strict Good Manufacturing Practices (GMP). Every batch is third-party tested for purity and potency.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions about Memory Lift.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-blue-600 flex-shrink-0" size={24} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 p-12 rounded-2xl shadow-2xl text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-xl mb-8 opacity-90">
            Our customer support team is here to help. Contact us anytime!
          </p>
          <Button
            onClick={() => window.open('https://brainhealthfocus.online/mlt-tsl-cart-aff-fr150-4b-pa/?afid=7QxNTjlbQU', '_blank')}
            className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-6 text-lg rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Try Memory Lift Risk-Free Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
