import { createContext, useState, useEffect } from "react";

//* CONTEXT *//
interface NavbarContextProps {
  isSidebar: boolean;
  onToggleSidebar: () => void;
}

export const NavbarContext = createContext({} as NavbarContextProps);

//* PROVIDER *//
interface Props {
  children: React.ReactNode;
}

export const NavbarProvider: React.FC<Props> = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);

  const onToggleSidebar = () => setIsSidebar((prev) => !prev);

  useEffect(() => {
    if (isSidebar) document.body.style.overflow = "hidden";
    if (!isSidebar) document.body.style.overflow = "unset";
  }, [isSidebar]);

  return (
    <NavbarContext.Provider value={{ isSidebar, onToggleSidebar }}>
      {children}
    </NavbarContext.Provider>
  );
};
