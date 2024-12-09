import { motion } from "framer-motion";
import CardProjet from "./CardProjet";
import p1 from "../assets/img/P1.png";
import p2 from "../assets/img/P2.png";
import p3 from "../assets/img/P3.png";
import calculette from "../assets/img/Calculette.png";

function Projet() {
  return (
    <div className="w-full">
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold max-[900px]:text-center max-[500px]:text-3xl"
      >
        Mes <span className="text-secondary">projets</span>
      </motion.p>
      <div className="flex gap-4 pt-6 max-[1000px]:flex-col">
        <div className="flex-1 flex gap-4 flex-col">
          <CardProjet
            delay={0}
            titre="MiniGames"
            image={p1}
            lien={"https://mini-games-ruddy.vercel.app/"}
            liengithub={"https://github.com/BarisRz/MiniGames"}
            texte="Plusieurs mini jeux, dont un blindtest visuel avec effet de pixelisation"
            tech={["React", "Tailwind", "Fuse.js"]}
          />
          <CardProjet
            delay={0.2}
            titre="Elixir Maker"
            image={p2}
            lien={"https://elixir-maker.vercel.app/"}
            liengithub="https://github.com/WildCodeSchool-2023-09/JS-RemoteFR-SACOD-P2-Vogue-Merry"
            texte="Jeu basé sur l'univers d'Harry Potter, principalement sur les élixirs de cet univers. Vous devez concocter un élixir à partir d'une liste d'ingrédients."
            tech={["React", "Tailwind", "Framer-motion"]}
          />
        </div>
        <div className="flex-1 flex gap-4 flex-col">
          <CardProjet
            delay={0.4}
            titre="Wildy Gamy"
            image={p3}
            liengithub="https://github.com/WildCodeSchool-2023-09/wildy-game"
            lien={"https://wildy-game.remote-fr-2.wilders.dev/"}
            texte="Projet toujours en cours, dont l'objectif est d'attirer des personnes vers une salle d'arcade réelle à travers des mini-jeux."
            tech={[
              "React",
              "Tailwind",
              "Framer-motion",
              "Node.JS",
              "Express",
              "MySQL",
            ]}
          />
          <CardProjet
            delay={0.6}
            titre="Calculette"
            image={calculette}
            lien={"https://calculator-alpha-nine-87.vercel.app/"}
            liengithub="https://github.com/BarisRz/Calculator"
            texte="Une calculatrice simple conçue principalement pour me permettre de m'entraîner à utiliser Tailwind."
            tech={["React", "Tailwind", "Framer-motion"]}
          />
        </div>
      </div>
    </div>
  );
}

export default Projet;

// https://github.com/BarisRz/projet1 // https://wildersbook.vercel.app/
// https://github.com/WildCodeSchool-2023-09/JS-RemoteFR-SACOD-P2-Vogue-Merry // https://elixir-maker.vercel.app/
// https://github.com/WildCodeSchool-2023-09/wildy-game // https://wildy-game.remote-fr-2.wilders.dev/
// https://github.com/BarisRz/Calculator // https://calculator-alpha-nine-87.vercel.app/
