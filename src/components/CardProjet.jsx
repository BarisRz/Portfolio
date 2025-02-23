import { motion } from "framer-motion";
import github from "../assets/svg/github.svg";
function CardProjet({
  delay,
  titre,
  image,
  texte,
  lien,
  liengithub = "",
  tech,
}) {
  return (
    <div className="flex max-[1000px]:flex-col flex-1 max-sm:items-center">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay }}
        className="w-[250px] h-[250px] bg-white border border-black hover:border-secondary transition-colors group"
      >
        <div className="h-[200px] w-full bg-black border-b border-black group-hover:border-secondary transition-colors">
          <a href={lien} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt={texte}
              className="object-cover w-full h-full "
            />
          </a>
        </div>
        <div className="flex items-center h-[50px] px-2 justify-between">
          <p className="text-xl font-medium">{titre}</p>
          {liengithub && (
            <a href={liengithub} target="_blank" rel="noopener noreferrer">
              <img
                src={github}
                alt="github link"
                className="h-8 hover:scale-125 transition"
              />
            </a>
          )}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.1 }}
        className="px-3 h-full flex-1 text-lg font-medium max-[1000px]:pb-8"
      >
        <p>{texte}</p>
        <div>
          Tech :{" "}
          {tech.map((element, index) => (
            <span key={index} className="font-bold pr-2">
              {element}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default CardProjet;
