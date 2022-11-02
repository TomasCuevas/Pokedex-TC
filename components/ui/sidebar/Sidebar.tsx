import { useContext } from "react";
import NextLink from "next/link";

//* icons *//
import { MdClose } from "react-icons/md";

//* components *//
import { SearcherSidebar, TypesOfPokemonSidebar } from "./";

//* context *//
import { HeaderContext } from "../../../context";

export const Sidebar: React.FC = () => {
  const { onToggleSidebar } = useContext(HeaderContext);

  return (
    <section className="absolute top-0 left-0 min-h-screen w-screen bg-gray-900 px-7 lg:hidden">
      <div className="flex h-[85px] w-full items-center justify-end py-2 ">
        <MdClose
          onClick={onToggleSidebar}
          className="cursor-pointer text-4xl text-white"
        />
      </div>
      <div className="mx-auto flex w-full max-w-[300px] flex-col items-center gap-5 rounded-[14px] bg-slate-800 py-2 px-5 shadow-sm md:max-w-[500px] md:flex-row-reverse md:justify-center">
        <NextLink href="/favorites" passHref>
          <a
            onClick={() => {
              setTimeout(() => {
                onToggleSidebar();
              }, 300);
            }}
          >
            <button className="favorite-gradient rounded-xl px-12 py-2 text-base font-medium tracking-[1px] text-slate-100 transition-all duration-300 hover:rotate-1 hover:scale-[102%]">
              Favoritos
            </button>
          </a>
        </NextLink>
        <SearcherSidebar />
      </div>
      <TypesOfPokemonSidebar />
    </section>
  );
};
