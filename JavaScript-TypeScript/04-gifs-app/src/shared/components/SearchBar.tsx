import React from 'react'

interface Props {
    placeholder?: string
}

export default function SearchBar({placeholder = "Buscar"}: Props) {
  return (
    <div className='search-container'>
        <input type="text" placeholder={placeholder} />
        <button>Buscar</button>

    </div>
  )
}
