import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

interface Props {
  next: string | undefined;
  previous: string | undefined;
  nextClick: () => void;
  previousClick: () => void;
}

export const Arrows: React.FC<Props> = ({
  next,
  previous,
  nextClick,
  previousClick,
}) => {
  return (
    <div className="flex w-full justify-between">
      <MdOutlineNavigateBefore
        onClick={previousClick}
        className={
          previous
            ? "mr-auto cursor-pointer text-4xl text-slate-300 transition-all duration-300 hover:-translate-x-2 hover:text-white sm:text-4xl md:text-5xl lg:text-6xl"
            : "hidden"
        }
      />
      <MdOutlineNavigateNext
        onClick={nextClick}
        className={
          next
            ? "ml-auto cursor-pointer text-4xl text-slate-300 transition-all duration-300 hover:translate-x-2 hover:text-white sm:text-4xl md:text-5xl lg:text-6xl"
            : "hidden"
        }
      />
    </div>
  );
};
