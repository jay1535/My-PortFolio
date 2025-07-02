import { lazy, Suspense, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";

import Loader from "../components/Loader";
import { socialLinks } from "../constants";

// Lazy load the Fox model safely
const Fox = lazy(() => import("../models/Fox"));

const Contact = () => {
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleHover = useCallback(() => {
    setCurrentAnimation("walk");
    setTimeout(() => setCurrentAnimation("idle"), 6000);
  }, []);

  const handleLeave = useCallback(() => setCurrentAnimation("idle"), []);

  const handleClick = useCallback((url) => {
    setCurrentAnimation("hit");
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.open(url, "_blank");
      }
    }, 1500);
  }, []);

  return (
    <>
      <section className="relative flex lg:flex-row flex-col max-w-full mx-auto sm:p-16 pb-12 pt-28 px-8 min-h-[calc(100vh-80px)] h-full bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
        {/* Left Section */}
        <div className="flex-1 min-w-[50%] flex flex-col justify-center">
          <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins text-left">
            Get In Touch{" "}
            <span className="bg-gradient-to-r from-[#007CF0] to-[#00DFD8] bg-clip-text text-transparent font-semibold drop-shadow">
              With Me
            </span>
          </h1>
          <p className="text-gray-300 text-lg mt-4 leading-relaxed">
            Feel free to connect with me through my social links below.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-6 mt-6">
            {socialLinks.map((link) => (
              <button
                key={link.name}
                onClick={() =>
                  handleClick(
                    link.name === "Email"
                      ? "https://mail.google.com/mail/?view=cm&fs=1&to=habbujayanth@gmail.com"
                      : link.link
                  )
                }
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
                className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-5 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/50"
              >
                <img src={link.iconUrl} alt={link.name} className="w-6 h-6" />
                <span className="text-gray-300 hover:text-white transition-all">
                  {link.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Section: 3D Fox Model */}
        <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <directionalLight intensity={2} position={[0, 0, 1]} />
            <ambientLight intensity={0.3} />
            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.6, -0.6, 0]}
                scale={[0.6, 0.6, 0.6]}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center justify-center py-6 border-t border-gray-600 bg-[#0f172a] text-gray-400 text-xl">
        <p className="text-white italic mb-2">habbujayanth@gmail.com</p>
        <p className="mb-2">
          © 2025{" "}
          <span className="text-white font-semibold">Jayant Habbu</span>. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Contact;
