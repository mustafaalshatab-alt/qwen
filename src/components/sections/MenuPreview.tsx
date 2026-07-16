'use client';

import { motion } from 'framer-motion';
import { Coffee, Leaf, Star } from 'lucide-react';
import Button from '@/components/ui/Button';

const menuItems = [
  {
    name: 'Espresso Noir',
    description: 'Bold and intense single-origin espresso',
    price: '$4.50',
    icon: Coffee,
    popular: true,
  },
  {
    name: 'Midnight Latte',
    description: 'Smooth espresso with velvety steamed milk',
    price: '$5.50',
    icon: Coffee,
    popular: false,
  },
  {
    name: 'Dark Mocha',
    description: 'Rich chocolate meets premium dark roast',
    price: '$6.00',
    icon: Coffee,
    popular: true,
  },
  {
    name: 'Vanilla Dream',
    description: 'Creamy vanilla infused cold brew',
    price: '$5.00',
    icon: Leaf,
    popular: false,
  },
];

export default function MenuPreview() {
  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a110b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our <span className="text-[#D4AF37]">Signature</span> Menu
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Handcrafted beverages made with the finest beans from around the world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:border-[#D4AF37]/50 transition-all duration-300">
                {item.popular && (
                  <div className="absolute -top-3 -right-3 bg-[#D4AF37] text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star size={12} fill="currentColor" />
                    Popular
                  </div>
                )}
                
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#8B5E3C] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-black" size={32} />
                </div>

                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#D4AF37]">{item.price}</span>
                  <Button size="sm" variant="secondary">
                    Order
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline">
            View Full Menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
