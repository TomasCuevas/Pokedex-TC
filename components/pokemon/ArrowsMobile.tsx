import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

interface Props {
  next: string | undefined;
  previous: string | undefined;
  nextClick: () => void;
  previousClick: () => void;
}

export const ArrowsMobile: React.FC<Props> = ({
  next,
  previous,
  nextClick,
  previousClick,
}) => {
  return (
    <div className="w-full flex justify-between lg:hidden">
      <MdOutlineNavigateBefore
        onClick={previousClick}
        className={
          previous
            ? "text-4xl text-slate-400 cursor-pointer hover:text-white duration-300 sm:text-4xl md:text-5xl mr-auto"
            : "hidden"
        }
      />
      <MdOutlineNavigateNext
        onClick={nextClick}
        className={
          next
            ? "text-4xl text-slate-400 cursor-pointer hover:text-white duration-300 sm:text-4xl md:text-5xl ml-auto"
            : "hidden"
        }
      />
    </div>
  );
};
