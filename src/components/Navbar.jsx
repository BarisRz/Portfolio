import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
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
        if (menuOpen) {
          setScrolled(true);
        } else {
          setScrolled(!scrolled);
        }
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, menuOpen]);
  return (
    <div
      className={`fixed w-full z-20 flex-col transition duration-700 ${
        scrolled && "bg-white shadow"
      }`}
    >
      <div className={`w-full z-20 flex justify-center`}>
        <div className="w-[1440px]">
          <nav className="flex py-3 justify-between max-[1440px]:px-4">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
              onClick={() => {
                setMenuOpen(false);
                setScrolled(false);
              }}
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
                    smooth={true}
                    spy={true}
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
                onClick={() => {
                  setMenuOpen(!menuOpen);
                  if (!menuOpen) {
                    setScrolled(true);
                  } else if (window.scrollY === 0) {
                    setScrolled(false);
                  }
                }}
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
      {menuOpen && (
        <div className="w-screen font-bold">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-72}
              duration={500}
              className="block px-4 py-2 border-t border-b"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Compétences
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Link
              to="projet"
              spy={true}
              smooth={true}
              offset={-72}
              duration={500}
              className="block px-4 py-2 border-t border-b"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Projets
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-72}
              duration={500}
              className="block px-4 py-2 border-t border-b"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Contact
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <a
              href={CV}
              download
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <div className="flex relative cursor-pointer px-4 py-2 border-t border-b">
                CV
                <span className="underline-nav"></span>
                <img
                  src={dl}
                  alt="Download CV"
                  className="group-hover:animate-bounce transition w-6 max-[900px]:w-4"
                />
              </div>
            </a>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
