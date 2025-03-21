import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import { socialLinks } from "../constants";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          to_name: "Moulya",
          message: form.message,
          email: form.email,
          to_email: "moulyahegde2004@gmail.com",
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({ show: true, text: "Message Sent Successfully", type: "success" });

        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        console.log(error);
        showAlert({ show: true, text: "Did not receive your message", type: "danger" });
      });
  };

  return (
    <>
    <section className="relative flex lg:flex-row flex-col max-w-full mx-auto sm:p-16 pb-12 pt-28 px-8 min-h-[calc(100vh-80px)] h-full bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
      {alert.show && <Alert {...alert} />}
      {/* Left Side: Contact Form */}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="sm:text-5xl text-3xl font-bold sm:leading-snug font-poppins text-gray-100">
          Get In Touch
        </h1>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6 mt-10">
          <label className="text-gray-300 text-lg font-medium">
            Name
            <input
              type="text"
              name="name"
              className="bg-gray-800 border border-gray-600 text-gray-300 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mt-2 shadow-lg shadow-blue-900/50 transition-all duration-300 outline-none"
              placeholder="John Doe"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-gray-300 text-lg font-medium">
            Email
            <input
              type="email"
              name="email"
              className="bg-gray-800 border border-gray-600 text-gray-300 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mt-2 shadow-lg shadow-blue-900/50 transition-all duration-300 outline-none"
              placeholder="john@example.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-gray-300 text-lg font-medium">
            Message
            <textarea
              name="message"
              rows="4"
              className="bg-gray-800 border border-gray-600 text-gray-300 text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mt-2 shadow-lg shadow-blue-900/50 transition-all duration-300 outline-none"
              placeholder="Write your message here..."
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            className="text-white bg-gradient-to-r from-[#0072ff] to-[#00c6ff] hover:opacity-80 transition-opacity focus:ring-4 focus:outline-none focus:ring-blue-500 font-semibold rounded-md text-lg w-full sm:w-auto px-6 py-3 text-center shadow-md shadow-blue-500/50"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      
      {/* Right Side: 3D Model */}
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.4} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
          
    </section>

        {/* Footer */}
        <footer className="w-full flex flex-col items-center justify-center py-6 border-t border-gray-600 bg-[#0f172a] text-gray-400 text-xl">
      <p className="mb-2">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Jayant Habbu</span>. All rights reserved.
      </p>
      
      <div className="flex gap-6">
        {socialLinks
          .filter((link) => link.name !== "Contact") // Exclude Contact
          .map((link) => (
            <a
              key={link.name}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition duration-300"
            >
              <img src={link.iconUrl} alt={link.name} className="w-5 h-5" />
              <span>{link.name}</span>
            </a>
          ))}
      </div>
    </footer>

    </ >
        

  );
};

export default Contact;