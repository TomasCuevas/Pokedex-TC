import { createContext, useState } from "react";

//* CONTEXT *//
interface FavoritesContextProps {
  rerender: boolean;
  onSetRerender: () => void;
}

export const FavoritesContext = createContext({} as FavoritesContextProps);

//* PROVIDER *//
interface Props {
  children: React.ReactNode;
}

export const FavoritesProvider: React.FC<Props> = ({ children }) => {
  const [rerender, setRerender] = useState(false);

  const onSetRerender = () => setRerender((prev) => !prev);

  return (
    <FavoritesContext.Provider value={{ rerender, onSetRerender }}>
      {children}
    </FavoritesContext.Provider>
  );
};
