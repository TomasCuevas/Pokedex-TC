import { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/future/image";

//* icons *//
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

//* hooks *//
import { useToggleFavorite } from "../../hooks";

//* context *//
import { FavoritesContext } from "../../context";

//* interfaces *//
import { PokemonFavorite } from "../../interfaces";

interface Props {
  pokemon: PokemonFavorite;
}

export const FavoritePokeCard: React.FC<Props> = ({ pokemon }) => {
  const { onSetRerender } = useContext(FavoritesContext);
  const router = useRouter();

  const { onToggleFavorite } = useToggleFavorite(pokemon.name, pokemon.id);

  const onNavigate = () => {
    router.push(`/pokemon/${pokemon.name}`);
  };

  return (
    <article
      onClick={onNavigate}
      className="group flex w-[calc(50%_-_16px)] flex-col md:w-[calc(33%_-_16px)] lg:w-[calc(25%_-_16px)] xl:w-[calc(20%_-_16px)] 2xl:w-[calc(16%_-_16px)]"
    >
      <div className="relative flex w-full cursor-pointer flex-col items-center rounded-2xl bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20">
        <div className="absolute right-3 top-3 flex rounded-full bg-slate-900 p-[2px]">
          <MdOutlineRemoveCircleOutline
            className="text-2xl text-white duration-300 hover:text-red-700"
            onClick={(event) => {
              event.stopPropagation();
              onToggleFavorite();
              onSetRerender();
            }}
          />
        </div>
        <div className="w-[200px]">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt={pokemon.name}
            width={0}
            height={0}
            sizes="100%"
            quality={60}
            className="h-[200px] w-full"
          />
        </div>
        <footer className="flex w-full justify-center px-3 py-2">
          <h3 className="text-xl font-semibold capitalize text-slate-300 group-hover:text-slate-100">
            {pokemon.name}
          </h3>
        </footer>
      </div>
    </article>
  );
};
