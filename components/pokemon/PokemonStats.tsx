//* interface *//
import { Stat } from "../../interfaces/pokemonFull";

interface Props {
  stat: Stat[];
}

export const PokemonStats: React.FC<Props> = ({ stat }) => {
  const stats = [
    { name: "Hp", image: "/img/abilities/hp.png", base: stat[0].base_stat },
    {
      name: "Attack",
      image: "/img/abilities/attack.png",
      base: stat[1].base_stat,
    },
    {
      name: "Defense",
      image: "/img/abilities/defense.png",
      base: stat[2].base_stat,
    },
    {
      name: "Speed",
      image: "/img/abilities/speed.png",
      base: stat[5].base_stat,
    },
  ];

  return (
    <section className="flex w-full flex-wrap justify-evenly gap-10 rounded-[14px] bg-slate-900 p-5">
      {stats.map((stat) => (
        <div key={stat.name} className="flex">
          <div className="flex flex-col items-center gap-5">
            <h5 className="font-black tracking-[4px] text-slate-300 lg:text-xl">
              {stat.name}
            </h5>
            <img
              src={stat.image}
              alt="hp"
              className="h-[120px] w-[120px] object-fill"
            />
            <span className="text-4xl font-black tracking-[5px] text-slate-100">
              {stat.base}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};
