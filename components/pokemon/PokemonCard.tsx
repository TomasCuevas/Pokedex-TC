import { useRouter } from "next/router";
import { motion, Variants } from "framer-motion";

//* animation variants *//
const articleVariants: Variants = {
  offscreen: { opacity: 0.8 },
  onscreen: { opacity: 1, transition: { duration: 0.5 } },
};

const imageVariants: Variants = {
  offscreen: { opacity: 0, scale: 0 },
  onscreen: {
    opacity: 1,
    scale: [0, 1.1, 1],
    transition: { duration: 0.8 },
  },
  hover: {
    opacity: 1,
    scale: 1.5,
    rotate: 30,
    y: -20,
    transition: { duration: 0.4 },
  },
};

const nameVariants: Variants = {
  offscreen: { opacity: 0, x: 50 },
  onscreen: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

//* interfaces *//
import { IPokemon } from "../../interfaces/pokemonList";

export const PokemonCard: React.FC<IPokemon> = ({ id, img, name }) => {
  const router = useRouter();

  const onNavigate = () => {
    return router.push(`/pokemon/${name}`);
  };

  return (
    <motion.article
      initial="offscreen"
      whileInView="onscreen"
      variants={articleVariants}
      viewport={{ once: true, amount: 0.1 }}
      onClick={onNavigate}
      className="group flex w-[calc(50%_-_16px)] scale-100 flex-col transition-all duration-300 md:w-[calc(33%_-_16px)] lg:w-[calc(25%_-_16px)] xl:w-[calc(20%_-_16px)] 2xl:w-[calc(16%_-_16px)]"
    >
      <div className="flex w-full cursor-pointer  flex-col items-center rounded-2xl bg-slate-900  transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20">
        <div className="w-[200px]">
          <motion.img
            initial="offscreen"
            whileInView="onscreen"
            whileHover="hover"
            viewport={{ once: true, amount: 0.1 }}
            variants={imageVariants}
            src={img}
            alt={name}
            className="h-[200px] w-full"
          />
        </div>
        <footer className="flex w-full justify-between px-3 py-2">
          <motion.h3
            initial="offscreen"
            whileInView="onscreen"
            variants={nameVariants}
            viewport={{ once: true, amount: 0.1 }}
            className="text-xl font-semibold capitalize text-slate-300 group-hover:text-slate-100"
          >
            {name}
          </motion.h3>
          <span className="text-xl font-semibold capitalize text-slate-300 group-hover:text-slate-100">
            #{id}
          </span>
        </footer>
      </div>
    </motion.article>
  );
};
