import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { getTechIcon } from "../data/techStackIcons";

export default function About({ darkMode }) {
  const skills = [
    "React",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "Next.js",
    "Laravel",
    "Flask",
    "MySQL",
    "PostgreSQL",
    "Git",
    "GitHub"
  ];

  return (
    <section
      id="about"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-gray-950" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        {/* About Description & Social Links */}
        <div className="max-w-3xl mx-auto mb-16">
          <p
            className={`text-lg leading-relaxed text-justify mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Saya{" "}
            <span className="font-semibold text-blue-500">Aji Prasetia</span>,
            lulusan{" "}
            <span className="font-semibold text-blue-500">
              Teknik Informatika
            </span>{" "}
            dari UIN Sultan Syarif Kasim Riau. Saya adalah seorang{" "}
            <span className="font-semibold text-blue-600">Web Developer</span>{" "}
            yang passionate dalam menciptakan pengalaman digital yang menarik
            dan fungsional. Dengan pengalaman dalam berbagai teknologi modern,
            saya selalu berusaha untuk terus belajar dan berkembang.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/ajiprasetia_/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all hover:scale-110 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label="Instagram"
            >
              <FaInstagram size={20} className="text-pink-500" />
            </a>
            <a
              href="https://github.com/ajiprasetia"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all hover:scale-110 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label="GitHub"
            >
              <FaGithub
                size={20}
                className={darkMode ? "text-white" : "text-gray-900"}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/aji-prasetia-5299b8185/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all hover:scale-110 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} className="text-blue-600" />
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="font-semibold text-xl mb-6 text-center">Tech Stack</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {skills.map((skill) => (
              <div
                key={skill}
                className={`flex flex-col items-center p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl transition-all hover:scale-110 ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-white hover:shadow-lg shadow-md"
                }`}
              >
                <img
                  src={getTechIcon(skill)}
                  alt={skill}
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-1 sm:mb-2 lg:mb-3"
                  onError={(e) => {
                    e.target.src = "https://img.icons8.com/fluency/48/code.png";
                  }}
                />
                <span className="text-xs sm:text-sm font-medium text-center">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
