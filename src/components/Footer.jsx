import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`py-12 px-4 ${darkMode ? "bg-slate-950 border-t border-gray-900" : "bg-white border-t border-gray-200"}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.instagram.com/ajiprasetia_/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all hover:scale-110 ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://github.com/ajiprasetia"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all hover:scale-110 ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/aji-prasetia-5299b8185/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all hover:scale-110 ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            © 2026 <span className="font-bold">Aji Prasetia</span>. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
