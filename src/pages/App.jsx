import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projet from "../components/Projet";
import Skill from "../components/Skill";
import Contact from "../components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div
        className="page max-w-[1440px] max-[500px]:items-center m-auto flex items-end"
        id="hero"
      >
        <Hero />
      </div>
      <div className="bg-third" id="skills">
        <div className="page max-w-[1440px] m-auto pb-10 flex items-center">
          <Skill />
        </div>
      </div>
      <div className="page max-w-[1440px] m-auto" id="projet">
        <Projet />
      </div>
      <div className="bg-third" id="contact">
        <div className="page max-w-[1440px] m-auto">
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
