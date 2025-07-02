
import { skills } from "../constants";
import SkillCard from "../components/skills";


const About = () => {
  return (
    <section className="relative max-w-full mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-screen bg-[#121212] text-[#EAEAEA]">
      {/* Background Accents */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#1A1A2E]/40 blur-[160px] top-0 left-[-200px]"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#16213E]/40 blur-[160px] bottom-0 right-[-200px]"></div>
      </div>

      {/* Heading */}
      <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins text-center">
        Hello, I am{" "}
        <span className="bg-gradient-to-r from-[#007CF0] to-[#00DFD8] bg-clip-text text-transparent font-semibold drop-shadow">
          Jayant
        </span>{" "}
        👋
      </h1>

      {/* Introduction */}
      <p className="mt-5 text-lg text-[#EAEAEA]/80 text-center max-w-3xl mx-auto">
      A passionate Software Engineer, full-stack developer, and problem-solver with a deep curiosity for technology. I love building innovative solutions, exploring new frameworks, and pushing the boundaries of what's possible with code. Whether it's crafting seamless user experiences, optimizing backend performance, or diving into AI and data science, I'm always eager to create, learn, and innovate
      </p>

      {/* Skills Section */}
      <div className="py-10">
        <h3 className="font-semibold sm:text-3xl text-xl font-poppins text-center">
          My Skills
        </h3>
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>

  

      {/* Call-to-Action Section */}
      <div className="mt-16 text-center bg-gradient-to-r from-[#9c0cf0] to-[#137f9d] text-white py-10 px-6 rounded-xl shadow-xl">
        <h3 className="text-3xl font-extrabold tracking-wide">
          Have an Idea? Let’s Make It Happen! 🚀
        </h3>
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

export default About;