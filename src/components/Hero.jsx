import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import photo from "../assets/Photo.png";
import photom from "../assets/PhotoM.png";
import reactlogo from "../assets/svg/react.svg";
import arrow from "../assets/svg/arrowdown.svg";

function Hero() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 900);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 900);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex justify-center pt-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex w-[95%] max-[900px]:flex-col items-center"
      >
        <img
          src={isLargeScreen ? photo : photom}
          alt="photo de Baris GUNAY"
          className="h-10/12 max-[1440px]:w-[400px] object-cover"
        />
        <div className="flex flex-col justify-center px-10 max-[300px]:px-8 pb-[25vh] max-[500px]:pb-10">
          <div className="flex items-center py-4 max-[900px]:justify-center">
            <p className="font-bold text-5xl max-[1440px]:text-3xl max-sm:text-xl">
              Developpeur <span className="text-secondary">Full Stack</span>
            </p>
            <img
              src={reactlogo}
              alt="react logo"
              className="animate-spin-slow hover:animate-spin"
              style={{ fill: "red" }}
            />
          </div>
          <p className="text-xl max-sm:text-lg max-[900px]:items-center max-[500px]:text-base">
            À l'issue de ma formation en "
            <span className="text-secondary font-semibold">
              Développement web et web mobile
            </span>
            ", j'ai décidé d'approfondir mes compétences en poursuivant avec une
            alternance en "
            <span className="text-secondary font-semibold">
              Conception et développement d'applications
            </span>
            " sur une durée de 15 mois à la Wild Code School.
          </p>
          <div className="pt-4 group cursor-pointer w-[220px]">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-72}
              duration={500}
              className="flex"
            >
              <p className="text-xl font-medium underline group-hover:decoration-secondary">
                En apprendre plus
              </p>
              <span className="translate-y-2">
                <img
                  src={arrow}
                  alt="arrow icon"
                  className="pl-2 animate-bounce"
                />
              </span>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
