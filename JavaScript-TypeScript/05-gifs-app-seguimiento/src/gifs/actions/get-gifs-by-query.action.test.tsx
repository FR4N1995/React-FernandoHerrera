import { beforeEach, describe, expect, test, vi } from "vitest";
import { getgifsByquery } from "./get-gifs-by-query.action";
import AxiosMockAdapter from 'axios-mock-adapter';
import { giphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from '../../../tests/mocks/giphy.response.data';




describe('getgifsByQuery', () =>{

    let mock = new AxiosMockAdapter(giphyApi);


    beforeEach(() =>{
       mock = new AxiosMockAdapter(giphyApi);
    })

    // test('should return a list of gifs', async() =>{


    // } )

    test('should return a list of gifs', async() =>{
        
        mock.onGet('/search').reply(200, giphySearchResponseMock);

        const gifs = await getgifsByquery('mikasa');

        expect(gifs.length).toBe(10);

        // console.log(gifs);

        gifs.forEach((gif) =>{

            expect(typeof gif.id).toBe('string');
            expect(typeof gif.title).toBe('string');
            expect(typeof gif.url).toBe('string');
            expect(typeof gif.width).toBe('number');
            expect(typeof gif.height).toBe('number');

        })



    });

    test('should handle error when the API returns an error', async() =>{
        mock.onGet('/search').reply(200, {data: []});
        mock.restore();
        const gifs = await getgifsByquery('');
        expect(gifs.length).toBe(0);

    });



    test('should handle error when API return an error', async() =>{

        // crear un spy ya que necesitamos manejar el error que cae en la exeption
        const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() =>{})



        mock.onGet('/search').reply(400, {
            data: {
                message: 'Bad Request',
            }  
        });

        const gifs = await getgifsByquery('mikasa');


        expect(gifs.length).toBe(0);
        expect(consoleErrorSpy).toHaveBeenCalled();
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
        expect(consoleErrorSpy).toHaveBeenCalledWith(expect.anything());



    })



} )