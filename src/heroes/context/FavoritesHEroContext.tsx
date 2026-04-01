import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/hero.interface";

// utilizamos un context cuando ocupamos una data en muchos lugares

// interface

interface FavoriteHeroContext {
    // state
    favorites: Hero[];
    favoriteCount: number,
    // Methods
    isFavorite: (hero: Hero) => boolean,
    taggleFavorites: (hero: Hero) => void

}





export const FavoriteHEroContext = createContext({} as FavoriteHeroContext);



// necesitamos algo constante y usaremos localStorage para alojar nuestros favoritos
const getFavoritesFromLocalStorage = ():Hero[] =>{
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];

}

export const FavoritesHEroProvider = ({children}:PropsWithChildren) => {

const [ favorites, setFavorites] = useState<Hero[]>(getFavoritesFromLocalStorage())

const toggleFavorite = (hero: Hero) => {

    const heroExist = favorites.find((h: Hero) => h.id=== hero.id)

    if(heroExist){
        const newFavorites = favorites.filter((h) => h.id !== hero.id )
        setFavorites(newFavorites);
        return;
    }

    setFavorites([... favorites, hero]);

}

const isFavorite = (hero: Hero) =>{
    return favorites.some((h) => h.id === hero.id);
}


useEffect(() =>{
    localStorage.setItem('favorites', JSON.stringify(favorites));
}, [favorites])

  return (
        <FavoriteHEroContext
        value={{
            favoriteCount: favorites.length,
            favorites: favorites,
            // esta funcion lo que me devolvera es un true o un false de si esta el heroe
            // isFavorite : (hero: Hero) => favorites.some((h) => h.id === hero.id),
            isFavorite : isFavorite,
            taggleFavorites: toggleFavorite
        }}
        >
            {children}
        </FavoriteHEroContext>
  )
}

