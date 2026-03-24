import { heroapi } from "../api/hero.api"
import type { HeroesResponse } from "../types/get-heroes.response";


const BASE_URL = import.meta.env.VITE_API_URL;


export const getHeroesByPages = async(
    page: number,
    limit: number = 6

): Promise<HeroesResponse> =>{

    if(isNaN(page)){
        page=1
    }
    if(isNaN(limit)){
        page=10
    }


    const response = await heroapi.get<HeroesResponse>('/',
        {
            params: {
                limit : limit,
                offset: (page - 1) * limit
            }
        }
    );
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