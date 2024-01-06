import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projet from "../components/Projet";
import Skill from "../components/Skill";

function App() {
  return (
    <>
      <div className="page max-w-[1440px] m-auto flex flex-col justify-between">
        <Navbar />
        <Hero />
      </div>
      <div className="bg-third">
        <div className="page max-w-[1440px] m-auto">
          <Skill />
        </div>
      </div>
      <div className="page max-w-[1440px] m-auto">
        <Projet />
      </div>
      <Footer />
    </>
  );
}

export default App;
