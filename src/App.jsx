import './App.css'
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import Navbar from './components/navbar/NavBar'
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';

import { Blob } from 'react-blob';

function App() {

  return (
    <div className="bg-[#050414] relative overflow-hidden">

      <Blob
        size="350px"
        style={{
          position: "absolute",
          top: "35%",
          left: "20%",
          zIndex: 0,
          backgroundColor: "#6C63FF",
          opacity: 0.25,
          filter: "blur(80px)"
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative pt-20 z-10">
        <Navbar />

        {/* Add section wrappers with ids */}
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

       <section id="project" className="min-h-[80vh]"> 
          <Project />
      </section>

      <section id="education" className="min-h-[80vh]">
        <Education />
      </section>

        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </div>

    </div>
  );
}

export default App;
