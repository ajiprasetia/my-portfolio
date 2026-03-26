import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Home({ darkMode, scrollToSection, t }) {
  const h = t.home;
  return (
    <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center">
          <div className="mb-6">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
              darkMode ? 'bg-gray-800 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
            }`}>
              {h.badge}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {h.greeting}{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">
              {h.role}
            </span>
          </h1>
          
          <p className={`text-lg sm:text-xl mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {h.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => scrollToSection('projects')} 
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              {h.viewProjects}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`w-full sm:w-auto px-8 py-3 rounded-full font-semibold border-2 transition-all hover:scale-105 ${
                darkMode 
                  ? 'border-gray-600 hover:bg-gray-800' 
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
            >
              {h.contactMe}
            </button>
          </div>

          <div className="animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className={`inline-flex items-center space-x-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
            >
              <span className="text-sm">{h.scrollMore}</span>
              <ArrowDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
