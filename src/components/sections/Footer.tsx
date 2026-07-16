'use client';

import { Coffee, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-xl font-bold text-[#D4AF37] mb-4">
              <Coffee size={24} />
              <span className="font-serif">Midnight Coffee</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Where every cup tells a story. Premium dark roasted coffee crafted with passion, served with love.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Menu</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#D4AF37] transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe for updates and special offers</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button className="bg-[#D4AF37] text-black px-4 py-2 rounded-lg hover:bg-[#8B5E3C] hover:text-white transition-all duration-300">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Midnight Coffee. All rights reserved. Crafted with ☕ and ❤️</p>
        </div>
      </div>
    </footer>
  );
}
