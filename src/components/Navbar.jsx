import React from "react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";

export default function Navbar({
  darkMode,
  toggleDarkMode,
  activeSection,
  mobileMenuOpen,
  toggleMobileMenu,
  scrollToSection,
  language,
  toggleLanguage,
  t,
}) {
  const navKeys = ["home", "about", "projects", "contact"];

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${darkMode ? "bg-gray-950/95 backdrop-blur-sm border-b border-gray-900" : "bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-200"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">

          {/* Logo - Left */}
          <div
            className="text-xl lg:text-2xl font-extrabold bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Aji Prasetia
          </div>

          {/* Desktop Menu - Center */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-8">
            {navKeys.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`transition-colors font-medium ${
                  activeSection === item
                    ? "text-indigo-500"
                    : darkMode
                      ? "text-gray-300 hover:text-indigo-400"
                      : "text-gray-700 hover:text-indigo-500"
                }`}
              >
                {t.nav[item]}
              </button>
            ))}
          </div>

          {/* Desktop Toggles - Right */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              title="Toggle Language"
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border font-semibold text-sm transition-all ${
                darkMode
                  ? "border-gray-700 text-gray-300 hover:border-indigo-500 hover:text-indigo-400"
                  : "border-gray-300 text-gray-700 hover:border-indigo-500 hover:text-indigo-600"
              }`}
            >
              <Globe size={15} />
              <span>{language}</span>
            </button>

            {/* Dark Mode Toggle */}
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

          {/* Mobile: right-side buttons */}
          <div className="md:hidden flex items-center space-x-1.5">
            {/* Language Toggle Mobile */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg border font-semibold text-xs transition-all ${
                darkMode
                  ? "border-gray-700 text-gray-300 hover:border-indigo-500 hover:text-indigo-400"
                  : "border-gray-300 text-gray-700 hover:border-indigo-500 hover:text-indigo-600"
              }`}
            >
              <Globe size={13} />
              <span>{language}</span>
            </button>

            <button
              onClick={toggleDarkMode}
              className={`p-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMobileMenu}
              className={`p-2 ${darkMode ? "text-gray-300 hover:text-indigo-400" : "text-gray-700 hover:text-indigo-500"}`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden ${darkMode ? "bg-gray-950 border-t border-gray-900" : "bg-white border-t border-gray-200"}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navKeys.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-center px-3 py-2 transition-colors rounded-md ${
                  activeSection === item
                    ? "text-indigo-500 bg-indigo-500/10 font-medium"
                    : darkMode
                      ? "text-gray-300 hover:text-indigo-400 hover:bg-gray-700"
                      : "text-gray-700 hover:text-indigo-500 hover:bg-gray-100"
                }`}
              >
                {t.nav[item]}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}