import { useRouter } from "next/router";
import Image from "next/future/image";

//* interfaces *//
import { Pokemon } from "../../interfaces";

export const PokemonCard: React.FC<Pokemon> = ({ id, img, name }) => {
  const router = useRouter();

  const onNavigate = () => {
    router.push(`/pokemon/${name}`);
  };

  return (
    <article
      onClick={onNavigate}
      className="group flex w-[calc(50%_-_16px)] flex-col md:w-[calc(33%_-_16px)] lg:w-[calc(25%_-_16px)] xl:w-[calc(20%_-_16px)] 2xl:w-[calc(16%_-_16px)]"
    >
      <div className="relative flex w-full cursor-pointer flex-col items-center rounded-2xl bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20">
        <div className="w-[200px]">
          <Image
            src={img}
            alt={name}
            width={0}
            height={0}
            sizes="100%"
            quality={60}
            className="w-full"
          />
        </div>
        <footer className="flex w-full justify-between px-3 py-2">
          <h3 className="text-xl font-semibold capitalize text-slate-300 group-hover:text-slate-100">
            {name}
          </h3>
          <span className="text-xl font-semibold capitalize text-slate-300 group-hover:text-slate-100">
            #{id}
          </span>
        </footer>
      </div>
    </article>
  );
};
