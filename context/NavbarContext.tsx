import { createContext, useState } from "react";

//* CONTEXT *//
interface NavbarContextProps {
  showPokemonTypes: boolean;
  showSidebar: boolean;
  onTogglePokemonTypes: () => void;
  onToggleSidebar: () => void;
}

export const NavbarContext = createContext({} as NavbarContextProps);

//* PROVIDER *//
interface Props {
  children: React.ReactNode;
}

export const NavbarProvider: React.FC<Props> = ({ children }) => {
  const [showPokemonTypes, setShowPokemonTypes] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const onTogglePokemonTypes = () => setShowPokemonTypes((prev) => !prev);
  const onToggleSidebar = () => setShowSidebar((prev) => !prev);

  return (
    <NavbarContext.Provider
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
    </NavbarContext.Provider>
  );
};
