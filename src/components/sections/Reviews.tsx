'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Johnson',
    role: 'Coffee Enthusiast',
    content: 'The best coffee I have ever had! The atmosphere is perfect for late-night work sessions. Their Espresso Noir is absolutely divine.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Regular Customer',
    content: 'Midnight Coffee has become my second home. The staff is amazing, and the quality is consistently outstanding. Highly recommend!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Food Blogger',
    content: 'A hidden gem! The attention to detail in every cup is remarkable. Their Dark Mocha is a must-try. Five stars all the way!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
  },
];

export default function Reviews() {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            What Our <span className="text-[#D4AF37]">Customers</span> Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:border-[#D4AF37]/50 transition-all duration-300">
                <Quote className="text-[#D4AF37]/20 mb-4" size={40} />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#D4AF37" className="text-[#D4AF37]" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{review.content}</p>

                <div className="flex items-center gap-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]"
                  />
                  <div>
                    <div className="font-bold">{review.name}</div>
                    <div className="text-sm text-gray-400">{review.role}</div>
                  </div>
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
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#D4AF37" className="text-[#D4AF37]" />
              ))}
            </div>
            <span className="text-sm">4.9/5 from 500+ reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
