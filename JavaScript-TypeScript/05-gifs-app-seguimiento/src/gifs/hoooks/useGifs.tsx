import React, { useState } from 'react'
import { Gif } from '../interfaces/gif.interface';
import { getgifsByquery } from '../actions/get-gifs-by-query.action';


const gifsCache: Record<string, Gif[]> = {}

const useGifs = () => {

      const [previousTerm, setPreviousTerms] = useState<string[]>([])
      const [gifs, setGifs] = useState<Gif[]>([]);
    
    
      const handleTermclicked = async(term: string) =>{
        if(gifsCache[term]){
            setGifs(gifsCache[term]);
            return
        }

        const gifs = await getgifsByquery(term);
        setGifs(gifs);
      }
    
      const handleSearch = async(query: string) =>{
        query =  query.trim().toLocaleLowerCase();
        if(query === ''){
          return alert('el campo esta vacio');
        }
    
        if(previousTerm.includes(query)){
          return alert('esa busqueda ya la tienes');
        }
    
    
        setPreviousTerms([query, ...previousTerm].splice(0, 8));
    
        const gifs = await getgifsByquery(query);
    
        console.log(gifs);
        setGifs(gifs);

        gifsCache[query] = gifs;
        // console.log({query})
      }


  return {
    gifs,
    previousTerm,
    handleSearch,
    handleTermclicked

  }
}

export default useGifs