import React from 'react'
import { mockGifs } from './mock-data/gifs-mock'
import CustomHeader from './shared/components/CustomHeader'
import SearchBar from './shared/components/SearchBar'
import PreviousSearches from './gifs/components/PreviousSearches'
import GiftList from './gifs/components/GiftList'

export const GifsApp = () => {
  return (
    <>
    {/* header */}
    <CustomHeader title='Buscador de Gifs' description='Descrube y comparte el gif perfecto' />

    {/* search container */}
    <SearchBar placeholder='Buscar Gif' />



    {/* busquedas previas */}
    <PreviousSearches title='Busqueda previas' searches={['Goku', 'Naruto', 'Ataque Titanes']} />

    {/* Gifs */}


    <GiftList gifs={mockGifs}/>




    </>
  )
}
