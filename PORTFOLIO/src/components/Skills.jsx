import { useState } from "react";

export default function SkillCard({ skill }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-24 h-24 [perspective:1000px] cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full bg-[#ffffff22] backdrop-blur-lg border border-[#ffffff44] rounded-xl flex justify-center items-center shadow-xl [backface-visibility:hidden]">
          <img src={skill.imageUrl} alt={skill.name} className="w-10 h-10 object-contain" />
        </div>

        {/* Back Side */}
        <div className="px-2 text-balance absolute inset-0 w-full h-full bg-gradient-to-br from-red-500 to-pink-800 rounded-xl flex justify-center items-center text-white font-semibold text-sm uppercase shadow-xl rotate-y-180 [backface-visibility:hidden]">
          {skill.name}
        </div>
      </div>
    </div>
  );
}