import { act, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import useGifs from "./useGifs";
import * as gifsActions from '../actions/get-gifs-by-query.action';

vi.mock('../actions/get-gifs-by-query.action', () => ({
    getgifsByquery: vi.fn(),
}));

describe('useGifs', () => {



    test('should return default metods', () => {

        const { result } = renderHook(() => useGifs());

        expect(result.current.gifs.length).toBe(0);

    })

    test('should return a list of gifs', async () => {
        // handleSearch
        const mockGifs = new Array(10).fill({
            id: '123',
            title: 'goku',
            url: 'https://test.com',
            width: 200,
            height: 200
        });

        (gifsActions.getgifsByquery as any).mockResolvedValue(mockGifs);

        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleSearch('goku');
        });

        expect(result.current.gifs.length).toBe(10);
        expect(result.current.previousTerm).toContain('goku');

    })

    test('should return a list of gifs when handleTermClicked is called', async () => {
        // handleSearch
        const mockGifs = new Array(10).fill({
            id: '123',
            title: 'mikasa',
            url: 'https://test.com',
            width: 200,
            height: 200
        });

        (gifsActions.getgifsByquery as any).mockResolvedValue(mockGifs);

        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleTermclicked('mikasa');
        });

        expect(result.current.gifs.length).toBe(10);

    })

    test('should return a list of gifs from cache', async () => {

        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleTermclicked('goku');
        })

        expect(result.current.gifs.length).toBe(10);

        vi.spyOn(gifsActions, 'getgifsByquery').mockRejectedValue(new Error('esto es un error'));



        expect(result.current.gifs.length).toBe(10);





    })

    test('should return no more than 8 previus term', async () => {

        const { result } = renderHook(() => useGifs());

        vi.spyOn(gifsActions, 'getgifsByquery').mockResolvedValue([]);

        await act(async () => {
            await result.current.handleSearch('goku1');
        })
        await act(async () => {
            await result.current.handleSearch('goku2');
        })
        await act(async () => {
            await result.current.handleSearch('goku3');
        })
        await act(async () => {
            await result.current.handleSearch('goku4');
        })
        await act(async () => {
            await result.current.handleSearch('goku5');
        })
        await act(async () => {
            await result.current.handleSearch('goku6');
        })
        await act(async () => {
            await result.current.handleSearch('goku7');
        })
        await act(async () => {
            await result.current.handleSearch('goku8');
        })
        await act(async () => {
            await result.current.handleSearch('goku9');
        })

        console.log(result.current.previousTerm);
        expect(result.current.previousTerm.length).toBe(8);
        expect(result.current.previousTerm).toStrictEqual([
            'goku9', 
            'goku8',
            'goku7', 
            'goku6',
            'goku5', 
            'goku4',
            'goku3', 
            'goku2']);

    })


}) 