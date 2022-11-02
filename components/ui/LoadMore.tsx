interface Props {
  onClick?: () => void;
  none: boolean;
}

export const LoadMore: React.FC<Props> = ({ onClick, none }) => {
  return (
    <div
      onClick={onClick}
      className={
        none
          ? "hidden"
          : "relative z-50 mx-auto mt-5 flex h-[50px] w-[25%] min-w-[200px] cursor-pointer items-center justify-center rounded-2xl bg-yellow-300  duration-1000 hover:scale-105 hover:bg-yellow-500 hover:duration-500"
      }
    >
      <div className="text-2xl font-bold text-slate-900">Cargar más...</div>
    </div>
  );
};
