import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Home({ darkMode, scrollToSection }) {
  return (
    <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Hero Content */}
        <div className="text-center">
          <div className="mb-6">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
              darkMode ? 'bg-gray-800 text-blue-400' : 'bg-blue-50 text-blue-600'
            }`}>
              👋 Wellcome to my Portfolio
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Halo, Saya <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Full Stack Developer</span>
          </h1>
          
          <p className={`text-lg sm:text-xl mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Membangun aplikasi web modern dan responsif dengan teknologi terkini. 
            Berfokus pada kualitas kode, performa optimal, dan pengalaman pengguna yang luar biasa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => scrollToSection('projects')} 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Lihat Project
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`w-full sm:w-auto px-8 py-3 rounded-full font-semibold border-2 transition-all hover:scale-105 ${
                darkMode 
                  ? 'border-gray-600 hover:bg-gray-800' 
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
            >
              Hubungi Saya
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className={`inline-flex items-center space-x-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
            >
              <span className="text-sm">Scroll untuk lebih lanjut</span>
              <ArrowDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}