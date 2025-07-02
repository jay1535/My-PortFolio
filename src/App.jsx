import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import {Home,About,Projects,Contact} from './pages'

const App = () => {
  return (
    <Router>
      <main className="bg-slate-300/20">
        <Navbar />
        <Routes className="flex-grow">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;