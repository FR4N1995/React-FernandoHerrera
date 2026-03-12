import React, { useState } from 'react'
import { mockGifs } from './mock-data/gifs-mock'
import CustomHeader from './shared/components/CustomHeader'
import SearchBar from './shared/components/SearchBar'
import PreviousSearches from './gifs/components/PreviousSearches'
import GiftList from './gifs/components/GiftList'



import { getgifsByquery } from './gifs/actions/get-gifs-by-query.action'
import { Gif } from './gifs/interfaces/gif.interface'




export const GifsApp = () => {

  const [previousTerm, setPreviousTerms] = useState<string[]>([])
  const [gifs, setGifs] = useState<Gif[]>([]);


  const handleTermclicked = (term: string) =>{
    console.log({term});
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
    // console.log({query})
  }


  return (
    <>
    {/* header */}
    <CustomHeader title='Buscador de Gifs' description='Descrube y comparte el gif perfecto' />

    {/* search container */}
    <SearchBar placeholder='Buscar Gif' onQuery={handleSearch} />



    {/* busquedas previas */}
    <PreviousSearches title='Busqueda previas' searches={previousTerm} onLabelClicked={handleTermclicked} />

    {/* Gifs */}


    <GiftList gifs={gifs}/>




    </>
  )
}
