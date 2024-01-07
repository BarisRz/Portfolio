import { motion } from "framer-motion";
import reacticon from "../assets/svg/reactskill.svg";
import js from "../assets/svg/js.svg";
import html from "../assets/svg/html.svg";
import css from "../assets/svg/css.svg";
import sass from "../assets/svg/sass.svg";
import tailwind from "../assets/svg/tailwind.svg";
import vite from "../assets/svg/vite.svg";
import vscode from "../assets/svg/vscode.svg";
import git from "../assets/svg/git.svg";
import github from "../assets/svg/github.svg";
import node from "../assets/svg/nodejs.svg";
import express from "../assets/svg/express.svg";
import mysql from "../assets/svg/mysql.svg";
import devtools from "../assets/svg/devtools.svg";
import figma from "../assets/svg/figma.svg";
import photoshop from "../assets/svg/photoshop.svg";

function Skill() {
  return (
    <div className="max-[1440px]:px-4">
      <h2 className="text-5xl font-extrabold pt-28 max-[500px]:text-3xl max-[500px]:text-center max-[500px]:pt-12">
        Mes <span className="text-secondary">compétences</span>
      </h2>
      <p className="text-4xl max-[500px]:text-3xl max-[900px]:text-center font-bold pt-20">
        Front<span className="text-secondary">End</span>
      </p>
      <div className="frontend flex pt-4 flex-wrap">
        <div className="skill-icon group flex-col hover:border-secondary">
          <img src={reacticon} alt="react icon" className="h-20" />
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-28 max-[900px]:top-24 font-semibold">
            React
          </p>
        </div>
        <div className="skill-icon group flex-col hover:border-secondary">
          <img src={js} alt="js icon" className="h-20" />
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-28 max-[900px]:top-24 font-semibold">
            JavaScript
          </p>
        </div>
        <div className="skill-icon group flex-col hover:border-secondary">
          <img src={html} alt="html icon" className="h-20" />
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-28 max-[900px]:top-24 font-semibold">
            HTML
          </p>
        </div>
        <div className="skill-icon group flex-col hover:border-secondary">
          <img src={css} alt="css icon" className="h-20" />
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-28 max-[900px]:top-24 font-semibold">
            CSS
          </p>
        </div>
        <div className="skill-icon group flex-col hover:border-secondary">
          <img src={sass} alt="sass icon" className="h-20" />
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-28 max-[900px]:top-24 font-semibold">
            Sass
          </p>
        </div>
        <div className="skill-icon group flex-col hover:border-secondary">
          <img src={tailwind} alt="tailwind icon" className="h-20" />
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-28 max-[900px]:top-24 font-semibold">
            Tailwind
          </p>
        </div>
        <div className="skill-icon group flex-col hover:border-secondary">
          <img src={vite} alt="vite icon" className="h-20" />
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-28 max-[900px]:top-24 font-semibold">
            Vite
          </p>
        </div>
      </div>
      <p className="text-4xl max-[500px]:text-3xl max-[900px]:text-center font-bold pt-20">
        Back<span className="text-secondary">End</span>
      </p>
      <div className="frontend flex pt-4 flex-wrap">
        <div className="skill-icon group flex-col hover:border-secondary">
          <img src={node} alt="react icon" className="h-20" />
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-28 max-[900px]:top-24 font-semibold">
            Nodejs
          </p>
        </div>
        <div className="skill-icon group flex-col hover:border-secondary">
          <img src={express} alt="express icon" className="h-8" />
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-28 max-[900px]:top-24 font-semibold">
            Express
          </p>
        </div>
        <div className="skill-icon group flex-col hover:border-secondary">
          <img src={mysql} alt="mysql icon" className="h-20" />
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-28 max-[900px]:top-24 font-semibold">
            MySQL
          </p>
        </div>
      </div>
      <p className="text-4xl max-[500px]:text-3xl max-[900px]:text-center font-bold pt-20">
        Outils<span className="text-secondary"> et autres</span>
      </p>
      <div className="frontend flex pt-4 flex-wrap">
        <div className="skill-icon group flex-col hover:border-secondary">
          <img src={devtools} alt="Devtools of chrome icon" className="h-20" />
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-28 max-[900px]:top-24 font-semibold">
            DevTools
          </p>
        </div>
        <div className="skill-icon group flex-col hover:border-secondary">
          <img src={vscode} alt="vscode icon" className="h-20" />
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-28 max-[900px]:top-24 font-semibold">
            VS Code
          </p>
        </div>
        <div className="skill-icon group flex-col hover:border-secondary">
          <img src={github} alt="Github icon" className="h-20" />
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-28 max-[900px]:top-24 font-semibold">
            GitHub
          </p>
        </div>
        <div className="skill-icon group flex-col hover:border-secondary">
          <img src={git} alt="Git icon" className="h-20" />
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-28 max-[900px]:top-24 font-semibold">
            Git
          </p>
        </div>
        <div className="skill-icon group flex-col hover:border-secondary">
          <img src={figma} alt="figma icon" className="h-20" />
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-28 max-[900px]:top-24 font-semibold">
            Figma
          </p>
        </div>
        <div className="skill-icon group flex-col hover:border-secondary">
          <img src={photoshop} alt="photoshop icon" className="h-20" />
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-28 max-[900px]:top-24 font-semibold">
            Photoshop
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
