import React, { useState } from "react";
import { projects } from "../../components/Constant";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
     {selectedProject && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-6"
    onClick={handleCloseModal}
  >
    <div
      className="bg-gray-900 rounded-xl shadow-2xl 
                 w-[80vw] max-w-3xl 
                 max-h-[80vh]
                 relative p-4
                 overflow-auto
                 hide-scrollbar"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Image */}
      <div className="w-full flex justify-center mb-4">
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="w-full rounded-xl object-contain max-h-[35vh]"
        />
      </div>

      {/* Title */}
      <h3 className="text-3xl font-bold text-white mb-2">
        {selectedProject.title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
        {selectedProject.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {selectedProject.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <a
          href={selectedProject.github}
          target="_blank"
          className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-300 px-4 py-2 rounded-xl text-center text-sm font-semibold"
        >
          View Code
        </a>

        <a
          href={selectedProject.webapp}
          target="_blank"
          className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl text-center text-sm font-semibold"
        >
          View Live
        </a>
      </div>

    </div>
  </div>
)}

    </section>
  );
};

export default Work;
