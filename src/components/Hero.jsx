import { Link } from "react-scroll";
import photo from "../assets/test.png";
import reactlogo from "../assets/svg/react.svg";
import arrow from "../assets/svg/arrowdown.svg";

function Hero() {
  return (
    <div className="flex justify-center">
      <div className="flex w-[95%]">
        <img src={photo} alt="photo de Baris GUNAY" className="h-10/12" />
        <div className="flex flex-col justify-center pl-10 pb-80">
          <div className="flex">
            <p className="font-bold text-5xl">
              Developpeur <span className="text-secondary">Full Stack</span>
            </p>
            <img
              src={reactlogo}
              alt="react logo"
              className="animate-spin-slow"
            />
          </div>
          <p className="text-xl">
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
      </div>
    </div>
  );
}

export default Hero;
