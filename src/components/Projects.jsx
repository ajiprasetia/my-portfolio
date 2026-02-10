import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { getTechIcon } from "../data/techStackIcons";

export default function Projects({ darkMode }) {
  const projects = [
    {
      id: 1,
      title: "WSAbsurd Portofolio",
      description:
        "Website portofolio modern dan interaktif untuk menampilkan profil Youtuber WSAbsurd",
      tech: ["React", "Vite", "Tailwind"],
      image: "/images/project1.png",
      demoUrl: "https://wsabsurd.vercel.app/",
      githubUrl: "https://github.com/ajiprasetia/wsabsurd-portofolio",
    },
    {
      id: 2,
      title: "Al-Quran Digital",
      description: "Aplikasi Al-Quran digital menggunakan data dari Quran.com ",
      tech: ["Vite", "Tailwind", "API Integration"],
      image: "/images/project2.png",
      demoUrl: "https://quran-digital-gilt.vercel.app/",
      githubUrl: "https://github.com/ajiprasetia/quran-digital",
    },
    {
      id: 3,
      title: "Cuaca Pekanbaru",
      description:
        "Prakiraan Cuaca kota Pekanbaru menggunakan data resmi dari BMKG",
      tech: ["Next.js", "Tailwind", "API Integration"],
      image: "/images/project3.png",
      demoUrl: "https://cuaca-pekanbaru.vercel.app/",
      githubUrl: "https://github.com/ajiprasetia/cuaca-pekanbaru",
    },
    {
      id: 4,
      title: "SPK LITAPDIMAS",
      description:
        "Rekomendasi Pengembangan Sistem LITAPDIMAS Kemenag sebagai Project Tugas Akhir",
      tech: ["React", "Tailwind", "Node.js", "MySQL"],
      image: "/images/project4.png",
      demoUrl: null,
      githubUrl: "https://github.com/ajiprasetia/spk-litapdimas",
    },
    {
      id: 5,
      title: "Quiz App",
      description:
        "Aplikasi kuis interaktif dengan berbagai kategori soal dan sistem penilaian otomatis",
      tech: ["Next.js", "API Integration", "Chart.js"],
      image: "/images/project6.png",
      demoUrl: "https://quiz-app-six-cyan-59.vercel.app/",
      githubUrl: "https://github.com/ajiprasetia/quiz-app",
    },
    {
      id: 6,
      title: "Exchange App",
      description:
        "Aplikasi konversi mata uang real-time dengan data kurs terkini dari berbagai negara",
      tech: ["React", "API Integration", "Chart.js"],
      image: "/images/project7.png",
      demoUrl: "https://exchange-app-by-ajiprasetia.vercel.app/",
      githubUrl: "https://github.com/ajiprasetia/exchange-app",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-lg overflow-hidden transition-all hover:shadow-xl hover:scale-105 ${darkMode ? "bg-gray-800" : "bg-white shadow-xl"}`}
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/600x400/${darkMode ? "1f2937" : "e5e7eb"}/${darkMode ? "9ca3af" : "6b7280"}?text=${encodeURIComponent(project.title)}`;
                  }}
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p
                  className={`mb-4 text-xs ${darkMode ? "text-gray-300" : "text-gray-600"} line-clamp-2`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tech.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center space-x-1"
                      title={tech}
                    >
                      <img
                        src={getTechIcon(tech)}
                        alt={tech}
                        className="w-5 h-5"
                        onError={(e) => {
                          e.target.src =
                            "https://img.icons8.com/fluency/48/code.png";
                        }}
                      />
                      <span className="text-xs font-medium">{tech}</span>
                    </div>
                  ))}
                </div>

                {/* Divider Line */}
                <div
                  className={`border-t mb-4 ${darkMode ? "border-gray-700" : "border-gray-200"}`}
                ></div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
                      project.demoUrl ? "flex-1" : "w-full"
                    } ${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-white"
                        : "bg-gray-800 hover:bg-gray-700 text-white"
                    }`}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
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
