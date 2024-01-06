import frontendmentor from "../assets/svg/frontendmentor.svg";
import github from "../assets/svg/github.svg";
import linkedin from "../assets/svg/linkedin.svg";
import dl from "../assets/svg/dl-icon.svg";
import CV from "../assets/CV.pdf";

function Navbar() {
  return (
    <div>
      <nav className="flex pt-4 justify-between">
        <p className="font-black text-[32px]">
          BG<span className="text-secondary">.</span>
        </p>
        <div className="flex items-center">
          <ul className="flex font-bold gap-12">
            <li>Accueil</li>
            <li>Compétences</li>
            <li>Projets</li>
            <li>Contact</li>
            <li className="group">
              <a href={CV} download>
                <div className="flex">
                  Mon CV
                  <img
                    src={dl}
                    alt="Download CV"
                    className="group-hover:animate-bounce transition"
                  />
                </div>
              </a>
            </li>
          </ul>
          <div className="w-[1px] h-[40px] bg-black mx-6" />
          <div className="flex gap-2">
            <a
              href="https://github.com/BarisRz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-8 hover:scale-125 transition"
                src={github}
                alt="github icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/gunay-baris/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-8 hover:scale-125 transition"
                src={linkedin}
                alt="linkedin icon"
              />
            </a>
            <a
              href="https://www.frontendmentor.io/profile/BarisRz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-8 hover:scale-125 transition"
                src={frontendmentor}
                alt="frontendmentor icon"
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
