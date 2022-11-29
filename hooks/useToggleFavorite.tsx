import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

//* utils *//
import { localFavorites } from "../utils";

export const useToggleFavorite = (name: string, id: number) => {
  const [isInFavorite, setIsInFavorite] = useState<boolean>(
    localFavorites.existInFavorites(name)
  );

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(name, id);
    setIsInFavorite(localFavorites.existInFavorites(name));

    if (isInFavorite) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  useEffect(() => {
    setIsInFavorite(localFavorites.existInFavorites(name));
  }, [name]);

  return {
    // properties
    isInFavorite,

    // methods
    onToggleFavorite,
  };
};
