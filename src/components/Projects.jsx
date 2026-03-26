import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { getTechIcon } from "../data/techStackIcons";

export default function Projects({ darkMode, t }) {
  const p = t.projects;

  const projects = [
    { id: 1, title: "SPK LITAPDIMAS", tech: ["React", "Tailwind", "Node.js", "MySQL"], image: "/images/project1.webp", demoUrl: null, githubUrl: "https://github.com/ajiprasetia/spk-litapdimas" },
    { id: 2, title: "kokoHape Store", tech: ["React", "Node.js", "Express", "cPanel"], image: "/images/project2.webp", demoUrl: "https://kokohape.com", githubUrl: null },
    { id: 3, title: "Al-Quran Digital", tech: ["React", "Tailwind", "API Integration"], image: "/images/project3.webp", demoUrl: "https://quran-digital-gilt.vercel.app", githubUrl: "https://github.com/ajiprasetia/quran-digital" },
    { id: 4, title: "Cuaca Pekanbaru", tech: ["Next.js", "Tailwind", "API Integration"], image: "/images/project4.webp", demoUrl: "https://cuaca-pekanbaru.vercel.app", githubUrl: "https://github.com/ajiprasetia/cuaca-pekanbaru" },
    { id: 5, title: "Modern Admin Panel", tech: ["Vite", "React", "Tailwind"], image: "/images/project5.webp", demoUrl: "https://admin-panel-by-ajiprasetia.vercel.app", githubUrl: "https://github.com/ajiprasetia/admin-panel" },
    { id: 6, title: "WSAbsurd Portofolio", tech: ["Vite", "React", "Tailwind"], image: "/images/project6.webp", demoUrl: "https://wsabsurd.vercel.app", githubUrl: "https://github.com/ajiprasetia/wsabsurd-portofolio" },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-center">
          <span className="bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">
            {p.title}
          </span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id}
              className={`rounded-xl overflow-hidden transition-all hover:shadow-xl hover:scale-105 ${darkMode ? "bg-gray-800" : "bg-white shadow-xl"}`}>
              <div className="relative aspect-video overflow-hidden">
                <img src={project.image} alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => { e.target.src = `https://placehold.co/600x400/${darkMode ? "1f2937" : "e5e7eb"}/${darkMode ? "9ca3af" : "6b7280"}?text=${encodeURIComponent(project.title)}`; }} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className={`mb-4 text-xs ${darkMode ? "text-gray-300" : "text-gray-600"} line-clamp-2`}>
                  {p.descriptions[project.id]}
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tech.map((tech) => (
                    <div key={tech} className="flex items-center space-x-1" title={tech}>
                      <img src={getTechIcon(tech)} alt={tech} className="w-5 h-5"
                        onError={(e) => { e.target.src = "https://img.icons8.com/fluency/48/code.png"; }} />
                      <span className="text-xs font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
                <div className={`border-t mb-4 ${darkMode ? "border-gray-700" : "border-gray-200"}`}></div>
                <div className="flex gap-3">
                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className={`flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all text-sm ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-800 hover:bg-gray-700 text-white"}`}>
                      <Github size={16} /><span>Code</span>
                    </a>
                  ) : (
                    <button disabled className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-semibold text-sm cursor-not-allowed opacity-40 bg-gray-400 text-white">
                      <Github size={16} /><span>Code</span>
                    </button>
                  )}
                  {project.demoUrl ? (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all text-sm">
                      <ExternalLink size={16} /><span>Live Demo</span>
                    </a>
                  ) : (
                    <button disabled className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-semibold text-sm cursor-not-allowed opacity-40 bg-gray-400 text-white">
                      <ExternalLink size={16} /><span>Live Demo</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
