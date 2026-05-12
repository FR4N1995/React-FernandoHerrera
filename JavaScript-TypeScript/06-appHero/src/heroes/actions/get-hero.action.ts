import { heroapi } from "../api/hero.api"
import type { Hero } from "../types/hero.interface"


const BASE_URL = import.meta.env.VITE_API_URL;


export const getHero = async(idSlug: string | undefined) => {

    const {data} =  await heroapi.get<Hero>(`/${idSlug}`)

    return{
        ...data,
        image: `${BASE_URL}/images/${data.image}`
    }

}