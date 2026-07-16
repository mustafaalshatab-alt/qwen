'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80', alt: 'Latte art' },
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80', alt: 'Coffee beans' },
  { src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80', alt: 'Coffee shop' },
  { src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80', alt: 'Espresso' },
  { src: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=800&q=80', alt: 'Brewing' },
  { src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80', alt: 'Coffee cup' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-[#1a110b] to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our <span className="text-[#D4AF37]">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A glimpse into our world of coffee perfection
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-[#D4AF37] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-full rounded-lg"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
