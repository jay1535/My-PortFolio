import React from "react";
import { projects } from "../constants";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col px-8 sm:p-16 pb-12 !pt-[126px] bg-[#121212] text-[#EAEAEA]">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#1A1A2E]/40 blur-[160px] top-0 left-[-200px]"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#16213E]/40 blur-[160px] bottom-0 right-[-200px]"></div>
      </div>

      {/* Heading */}
      <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins text-center">
        My <span className="bg-gradient-to-r from-[#007CF0] to-[#00DFD8] bg-clip-text text-transparent font-semibold drop-shadow">Projects</span> 🚀
      </h1>

      <p className="mt-5 text-lg text-[#EAEAEA]/80 text-center max-w-3xl mx-auto">
      Every project is a journey—from an initial spark of an idea to a fully realized solution. Here, you'll find a collection of my work, where creativity meets functionality, and innovation drives impact. Whether it's web development, AI-powered tools, or full-stack applications, each project reflects my passion for building meaningful and efficient solutions. Take a look and explore what I've been working on!
      </p>

      {/* Timeline Container */}
      <div className="mt-12">
        <VerticalTimeline animate={true} lineColor="#007CF0">
          {projects.map((project, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)",
                color: "#fff",
                borderRadius: "12px",
                boxShadow: "0 10px 20px rgba(0, 124, 240, 0.3)"
              }}
              contentArrowStyle={{ borderRight: "7px solid #007CF0" }}
              iconStyle={{ background: "#121212", color: "#fff" }}
              icon={<img src={project.iconUrl} alt={project.name} className="w-full h-full object-contain rounded-full p-2" />}
            >
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-sm opacity-80 mt-1">{project.description}</p>
              <div className="mt-4 flex items-center gap-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white text-sm font-semibold bg-[#ffffff12] px-4 py-2 rounded-lg transition hover:bg-white hover:text-[#121212]"
                >
                  View Project <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-16 text-center bg-gradient-to-r from-[#9c0cf0] to-[#137f9d] text-white py-10 px-6 rounded-xl shadow-xl">
        <h3 className="text-3xl font-extrabold tracking-wide">Have an Idea? Let’s Make It Happen! 🚀</h3>
        <p className="mt-3 text-lg max-w-2xl mx-auto opacity-90">
          Whether it's an innovative web app, an AI-powered solution, or something revolutionary, let's collaborate and build something extraordinary.
        </p>
        <a href="/contact">
          <button className="mt-5 bg-white text-[#183f64] font-semibold px-7 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-transform duration-300 hover:scale-105">
            Let’s Talk →
          </button>
        </a>
      </div>
    </section>
  );
};

export default Projects;