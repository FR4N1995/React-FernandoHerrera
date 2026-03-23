import { heroapi } from "../api/hero.api"
import type { HeroesResponse } from "../types/get-heroes.response";


const BASE_URL = import.meta.env.VITE_API_URL;


export const getHeroesByPages = async(): Promise<HeroesResponse> =>{
    const response = await heroapi.get<HeroesResponse>('/');
    const {data} = response;
    console.log({data});


    // necesitamos mapear una propiedad de i areglo por que la consulta de la imagen esta en otra url
    const heroes = data.heroes.map((hero) => ({
        ...hero,
        image : `${BASE_URL}/images/${hero.image}`
    }))


    return {
        ...data,
        heroes: heroes,
    };

}