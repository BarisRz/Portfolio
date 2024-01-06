import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import frontendmentor from "../assets/svg/frontendmentor.svg";
import github from "../assets/svg/github.svg";
import linkedin from "../assets/svg/linkedin.svg";
import dl from "../assets/svg/dl-icon.svg";
import CV from "../assets/CV.pdf";
import menu from "../assets/svg/menuburger.svg";
import cross from "../assets/svg/cross.svg";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <div
      className={`fixed w-full z-20 flex justify-center transition duration-700 ${
        scrolled && "bg-white shadow"
      }`}
    >
      <div className="w-[1440px]">
        <nav className="flex py-4 justify-between max-[1440px]:px-4 max-[1440px]:py-2">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <p className="group font-black text-[32px] hover:text-secondary transition">
              BG
              <span className="text-secondary group-hover:text-black transition">
                .
              </span>
            </p>
          </Link>
          <div className="flex max-sm:flex-row-reverse items-center max-[900px]:text-xs">
            <ul className="flex font-bold gap-12 max-[900px]:gap-8 max-sm:hidden">
              <li>
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="relative overflow-hidden cursor-pointer"
                >
                  Accueil
                  <span className="underline-nav"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="relative overflow-hidden cursor-pointer"
                >
                  Compétences
                  <span className="underline-nav"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="projet"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="relative overflow-hidden cursor-pointer"
                >
                  Projets
                  <span className="underline-nav"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="relative overflow-hidden cursor-pointer"
                >
                  Contact
                  <span className="underline-nav"></span>
                </Link>
              </li>
              <li className="group">
                <a href={CV} download>
                  <div className="flex relative cursor-pointer">
                    CV
                    <span className="underline-nav"></span>
                    <img
                      src={dl}
                      alt="Download CV"
                      className="group-hover:animate-bounce transition w-6 max-[900px]:w-4"
                    />
                  </div>
                </a>
              </li>
            </ul>
            <img
              src={menuOpen ? cross : menu}
              alt="menuburger icon"
              className="w-10 sm:hidden transition"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            <div className="w-[1px] h-[40px] bg-black mx-6" />
            <div className="flex gap-2">
              <a
                href="https://github.com/BarisRz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-8 hover:scale-125 transition max-[900px]:w-6"
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
                  className="w-8 hover:scale-125 transition max-[900px]:w-6"
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
                  className="w-8 hover:scale-125 transition max-[900px]:w-6"
                  src={frontendmentor}
                  alt="frontendmentor icon"
                />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
