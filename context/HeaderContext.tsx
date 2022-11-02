import { createContext, useState } from "react";

//* CONTEXT *//
interface HeaderContextProps {
  showPokemonTypes: boolean;
  showSidebar: boolean;
  onTogglePokemonTypes: () => void;
  onToggleSidebar: () => void;
}

export const HeaderContext = createContext({} as HeaderContextProps);

//* PROVIDER *//
interface Props {
  children: React.ReactNode;
}

export const HeaderProvider: React.FC<Props> = ({ children }) => {
  const [showPokemonTypes, setShowPokemonTypes] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const onTogglePokemonTypes = () => setShowPokemonTypes((prev) => !prev);
  const onToggleSidebar = () => setShowSidebar((prev) => !prev);

  return (
    <HeaderContext.Provider
      value={{
        // properties
        showPokemonTypes,
        showSidebar,

        // methods
        onTogglePokemonTypes,
        onToggleSidebar,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
