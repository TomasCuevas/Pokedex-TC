//* styles *//
import Styles from "./Loader.module.css";

export const Loader: React.FC = () => {
  return (
    <div className="my-5 flex h-20 w-full items-center justify-center">
      <span className={Styles.loader}></span>
    </div>
  );
};
