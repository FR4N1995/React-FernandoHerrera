import { beforeEach, describe, expect, test } from "vitest";
import { getHeroesByPages } from "./get-heroes-by-pages.action";
import AxiosMockAdapter from 'axios-mock-adapter'
import { heroapi } from "../api/hero.api";


describe('getHeroesByPageAction', () => {
    //! para esto necesite instalar esto: 
    // npm install axios-mock-adapter --save-dev

    // crear mock de axios
    
    
    const BASE_URL = import.meta.env.VITE_API_URL;
    const heroesApiMock = new AxiosMockAdapter(heroapi);

    // nos sirve para limpiar
    beforeEach(() =>{
        heroesApiMock.reset()
    })
    
    test('should return default heroes', async () => {

        heroesApiMock.onGet('/').reply(200, {
            total: 10,
            pages: 2,
            heroes: [
                {
                    image: '1.jpg'
                },
                {
                    image: '2.jpg'
                }
            ]
        })


        const response = await getHeroesByPages(1)

        // console.log(response);
        expect(response).toStrictEqual({
            total: 10,
            pages: 2,
            heroes: [
                { image: `${BASE_URL}/images/1.jpg` },
                { image: `${BASE_URL}/images/2.jpg` }
            ]
        })
    });

    test('should return the correct heroes when page is string number', async()=>{

        const responseObj = {
            total: 10,
            pages: 1,
            heroes: []
        }

        heroesApiMock.onGet('/').reply(200, responseObj);

        const result = await getHeroesByPages('abc' as unknown as number);

        // console.log(result);

        const params = heroesApiMock.history.get[0].params;
        // console.log(request);
        expect(params).toStrictEqual({ limit: 6, offset: 0, category: 'all' })
    })

    test('should call the api with correct params', async()=>{

        const responseObj = {
            total: 10,
            pages: 1,
            heroes: []
        }

        heroesApiMock.onGet('/').reply(200, responseObj);

        const result = await getHeroesByPages(2, 10, 'heroes');

        // console.log(result);

        const params = heroesApiMock.history.get[0].params;
        // console.log(params);
        expect(params).toStrictEqual({ limit: 10, offset: 10, category: 'heroes' })
    })


})