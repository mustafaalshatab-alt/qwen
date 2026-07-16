'use client';

import { motion } from 'framer-motion';
import { Award, Users, Clock, Coffee } from 'lucide-react';

const stats = [
  { icon: Clock, label: 'Years of Experience', value: '15+' },
  { icon: Users, label: 'Happy Customers', value: '50K+' },
  { icon: Coffee, label: 'Cups Served Daily', value: '1000+' },
  { icon: Award, label: 'Awards Won', value: '25+' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#1a110b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our <span className="text-[#D4AF37]">Story</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Founded in 2010, Midnight Coffee was born from a simple passion: to create the perfect cup of coffee for night owls, dreamers, and everyone in between.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We source our beans from sustainable farms across the globe, roasting them to perfection in our state-of-the-art facility. Every cup is a testament to our commitment to quality, sustainability, and the art of coffee making.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
                >
                  <stat.icon className="text-[#D4AF37] mb-2" size={24} />
                  <div className="text-3xl font-bold text-[#D4AF37] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&q=80"
                alt="Coffee shop interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-[#D4AF37] text-black p-6 rounded-2xl shadow-xl"
            >
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm">Years of Excellence</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
