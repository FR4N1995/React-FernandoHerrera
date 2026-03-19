import { heroapi } from "../api/hero.api"





export const getHeroesByPages = async() =>{
    const response = await heroapi.get('/');
    const {data} = response;

    return data;

}