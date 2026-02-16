import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/hero.interface";

interface IFavoriteHeroContext {
  favorites: Hero[];
  favoriteCount: number;
  isFavorite: (hero: Hero) => boolean;
  toogleFavorite: (hero: Hero) => void;
}

export const FavoriteHeroContext = createContext({} as IFavoriteHeroContext);


const getFavoritesFromLocalStorage = (): Hero[] => {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse('favorites') : [];
}

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>(getFavoritesFromLocalStorage);

  const isFavorite = (hero: Hero) => favorites.some(h => h.id === hero.id);

  const toogleFavorite = (hero: Hero) => {
    const heroExist = favorites.find(h => h.id === hero.id);
    if (heroExist) {
      const newFavorites = favorites.filter(h => h.id !== hero.id);
      setFavorites(newFavorites);
      return;
    }

    setFavorites([...favorites, hero]);
  }

  const InitialFavoriteHeroContext: IFavoriteHeroContext = {
    favorites: favorites,
    favoriteCount: favorites.length,
    isFavorite: isFavorite,
    toogleFavorite: toogleFavorite
  }

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites])

  return (
    <FavoriteHeroContext value={InitialFavoriteHeroContext} >
      {children}
    </FavoriteHeroContext >
  )
}