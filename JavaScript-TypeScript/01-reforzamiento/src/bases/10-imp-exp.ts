// import { heroes as herofavorites } from "../data/heroes.data"
import { heroes, type Hero, type Owner } from "../data/heroes.data"

// tambien podria ser asi
// const getHeroByID = (id:number): Hero | undefined =>{
const getHeroByID = (id:number): Hero =>{
    const hero = heroes.find((hero) => {
        return hero.id === id;
    }) 

    if(!hero){
        throw new Error(`No existe un heroe con ese id ${id}`);
    }

    return hero;
}

// console.log(getHeroByID(2));

export const getHeroesByOwner = (owner:Owner) =>{
    const heros = heroes.filter( (hero) =>
        hero.owner === owner
    );
    if(!heros){
        console.log({})
    }
    return heros;
}