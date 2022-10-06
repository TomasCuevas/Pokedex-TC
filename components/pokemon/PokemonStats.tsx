import Image from "next/image";

//* interface *//
import { Stat } from "../../interfaces";

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
    <section className="mx-[5%] my-5 flex flex-wrap justify-evenly gap-10 rounded-[14px] bg-slate-900 px-[5%] py-10">
      {stats.map((stat) => (
        <article key={stat.name} className="flex duration-300">
          <div className="flex flex-col items-center gap-5">
            <span className="font-black tracking-[4px]">{stat.name}</span>
            <Image
              src={stat.image}
              alt="hp"
              className="h-[120px] w-[120px] object-fill"
              height={120}
              width={120}
            />
            <span className="text-4xl font-black tracking-[5px]">
              {stat.base}
            </span>
          </div>
        </article>
      ))}
    </section>
  );
};
