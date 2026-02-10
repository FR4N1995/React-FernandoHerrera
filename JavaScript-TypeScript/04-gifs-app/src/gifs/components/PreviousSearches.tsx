import React from 'react'

interface Props {
    title? : string,
    searches: string[]
}


export default function PreviousSearches({title, searches}: Props) {
  return (
        <div className='previous-searches'>
        <h2>{title}</h2>
        <ul className='previous-searches-list'>
           {
            searches.map((term) =>(
                <li key={term}>{term}</li>
            ))
           }
        </ul>
    </div>

  )
}