import React from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar({
  darkMode,
  toggleDarkMode,
  activeSection,
  mobileMenuOpen,
  toggleMobileMenu,
  scrollToSection,
}) {
  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${darkMode ? "bg-gray-950/95 backdrop-blur-sm border-b border-gray-900" : "bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-200"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className={`text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent cursor-pointer`}
            onClick={() => scrollToSection("home")}
          >
            Aji Prasetia
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors font-medium ${
                  activeSection === item
                    ? "text-blue-500"
                    : darkMode
                      ? "text-gray-300 hover:text-blue-400"
                      : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {item === "about" ? "About" : item}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${
                darkMode
                  ? "text-gray-300 hover:bg-gray-700"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMobileMenu}
              className={`p-2 ${darkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-500"}`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden ${darkMode ? "bg-gray-950 border-t border-gray-900" : "bg-white border-t border-gray-200"}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["home", "about", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-center px-3 py-2 capitalize transition-colors rounded-md ${
                  activeSection === item
                    ? "text-blue-500 bg-blue-500/10 font-medium"
                    : darkMode
                      ? "text-gray-300 hover:text-blue-400 hover:bg-gray-700"
                      : "text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                }`}
              >
                {item === "about" ? "About" : item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
