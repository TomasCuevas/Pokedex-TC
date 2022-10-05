interface LoadMoreProps {
  onClick?: () => void;
  none: boolean;
}

export const LoadMore: React.FC<LoadMoreProps> = ({ onClick, none }) => {
  return (
    <div
      onClick={onClick}
      className={
        none
          ? "hidden"
          : "mx-auto bg-yellow-300 w-[20%] h-[50px] flex justify-center items-center cursor-pointer rounded-2xl hover:bg-yellow-500 hover:duration-500 duration-1000  hover:scale-105"
      }
    >
      <div className="text-slate-900 text-2xl font-bold">Cargar más...</div>
    </div>
  );
};
