import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { FavoriteHEroContext, FavoritesHEroProvider } from "./FavoritesHEroContext";
import { use } from "react";
import type { Hero } from "../types/hero.interface";



 const mockHero = {
    id: '1',
    name: 'batman'

 } as Hero

const TestComponent = () =>{
    const {favoriteCount, favorites, isFavorite, taggleFavorites} = use(FavoriteHEroContext)
    return(
        <div>
            <div data-testid= "favoite-count">{favoriteCount}</div>

            <div data-testId="favorite-list">
                {
                    favorites.map((hero) =>(
                        <div key={hero.id} data-testid={`hero-${hero.id}`}>
                            {hero.name}
                        </div>
                    ))
                }
            </div>


            <button data-testid="toggle-favorite"
                onClick={() => taggleFavorites(mockHero)}
            >
                toggle Favorite
            </button>

            <div data-testid='is-favorite'>
                {isFavorite(mockHero).toString()}
            </div>

        </div>
    )
}


const renderContextTest = () =>{
    return render(
        <FavoritesHEroProvider>
            <TestComponent />
        </FavoritesHEroProvider>
    )
}

describe('FavoritesHEroContext', () =>{

    beforeEach(()=>{
        localStorage.clear();
    })
    test('should initialize with default value', () =>{


        renderContextTest();

        // screen.debug();
        expect(screen.getByTestId('favoite-count').textContent).toBe('0')
        expect(screen.getByTestId('favorite-list').children.length).toBe(0)



    })

    test('should add hero to favorite when togglefavorite is called with new hero', () =>{
        // localStorage.clear();

        renderContextTest();
        const button = screen.getByTestId('toggle-favorite');

        fireEvent.click(button)

        // screen.debug()

        // console.log(localStorage.getItem('favorites'));
        expect(screen.getByTestId('favoite-count').textContent).toBe('1');
        expect(screen.getByTestId('is-favorite').textContent).toBe('true');
        expect(screen.getByTestId('hero-1').textContent).toBe('batman');
        expect(localStorage.getItem('favorites')).toBe('[{"id":"1","name":"batman"}]')

    })
    test('should romove hero from favorites when toggleFavorites is called', () =>{
        console.log(localStorage.getItem('favorites'));
        
        localStorage.setItem('favorites', JSON.stringify([mockHero]));


        renderContextTest();
         expect(screen.getByTestId('favoite-count').textContent).toBe('1');
        expect(screen.getByTestId('is-favorite').textContent).toBe('true');
        expect(screen.getByTestId('hero-1').textContent).toBe('batman');

        screen.debug()
         const button = screen.getByTestId('toggle-favorite');

        fireEvent.click(button)

        expect(screen.getByTestId('favoite-count').textContent).toBe('0');
        expect(screen.getByTestId('is-favorite').textContent).toBe('false');
        expect(screen.queryByTestId('hero-1')).toBeNull;


    })



})