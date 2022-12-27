export const NoFavorites: React.FC = () => {
  return (
    <section className="flex h-[calc(100vh_-_140px)] flex-col items-center justify-center">
      <h1 className="text-center text-5xl font-bold tracking-tighter text-slate-100">
        No hay favoritos
      </h1>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        alt="no favorite"
        className="h-[250px] w-[250px] opacity-20 grayscale"
      />
    </section>
  );
};
