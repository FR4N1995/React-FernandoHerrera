import { heroapi } from "../api/hero.api";
import type { Hero } from "../types/hero.interface";

interface Options {
    name?: string;
    team?: string;
    category?: string;
    universe?: string;
    status?: string;
    strength?: string;

}

const VITE_API_URL = import.meta.env.VITE_API_URL;

export const searchHEroesAction = async(option: Options = {}) =>{

     const {name, category, status, strength, team, universe} = option;

    if(!name && !category && !status && !strength && !team && !universe){
        return [];
    }

    const {data} = await heroapi.get<Hero[]>('/search', {
        params: {
            name,
            team,
            category,
            universe,
            status,
            strength
        }
    });
    console.log(data);


    return data.map((hero) =>({
        ...hero,
        image: `${VITE_API_URL}/images/${hero.image}`
    }))






}