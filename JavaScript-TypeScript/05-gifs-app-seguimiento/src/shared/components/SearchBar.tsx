import { useState } from 'react'

interface Props {
    placeholder?: string,
    onQuery : (query: string) => void
}

export default function SearchBar({placeholder = "Buscar", onQuery}: Props) {

  const [query, setQuery] = useState('');

  const handleSerch = () =>{
    onQuery(query);
    setQuery("");
  }


  return (
    <div className='search-container'>
        <input type="text" placeholder={placeholder} 
          value={query}
          onChange={(evento) => setQuery(evento.target.value)}
          onKeyDown={(evento) =>{
            if(evento.key === "Enter"){
              handleSerch();
            }
          }}
        />
        <button
        onClick={handleSerch}
        >Buscar</button>

    </div>
  )
}
