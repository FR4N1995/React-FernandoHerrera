import type { CSSProperties } from "react";

export const AwesomeApp = () =>{
    const firstName = 'Francisco'
    const lastname = 'Avalos'
    

    const favoriteGames = ['Fortnite', 'Smash', 'Mario']
    const isActive = false;

    const address = {
        zipcode: 38853,
        country: 'Mexico'
    }

    const mystyles: CSSProperties = {
        backgroundColor: '#f4f4f4',
        borderRadius: 15,
        padding: 20,
    }
    
    return  (
        <>
            <h1>{firstName}</h1>
            <h3>{lastname}</h3>

            <p>{favoriteGames.join(',')}</p>
            <p>{2 + 2}</p>

            <h1>{isActive ? 'Activo' : 'No activo'}</h1>

            <h3 style={mystyles}>{JSON.stringify(address)}</h3>
        
        </>
    )
}