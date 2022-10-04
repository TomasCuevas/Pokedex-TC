import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

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
      <MdArrowBackIosNew
        onClick={previousClick}
        className={
          previous
            ? "text-2xl text-slate-400 cursor-pointer hover:text-white duration-300 sm:text-4xl md:text-5xl mr-auto"
            : "hidden"
        }
      />
      <MdArrowForwardIos
        onClick={nextClick}
        className={
          next
            ? "text-2xl text-slate-400 cursor-pointer hover:text-white duration-300 sm:text-4xl md:text-5xl ml-auto"
            : "hidden"
        }
      />
    </div>
  );
};
