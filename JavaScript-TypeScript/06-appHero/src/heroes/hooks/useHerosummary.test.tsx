import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Children, type PropsWithChildren } from 'react';
import { describe, expect, test, vi } from "vitest";
import { renderHook, waitFor } from '@testing-library/react'
import useHerosummary from "./useHerosummary";
import { getSummary } from "../actions/get-summary.action";


vi.mock('../actions/get-summary.action', () =>({
    getSummary: vi.fn()
}))

const mockGetSummaryAction = vi.mocked(getSummary)


// aqui preparamos
const tanStackCustomProvider = () => {

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            }
        }



    })

    return ({ children }: PropsWithChildren) => (
        <QueryClientProvider client={queryClient} > {children}</QueryClientProvider>
    )
}

describe('UseSummary', () => {

    test('should return the initial state (isloading)', () => {

        const { result } = renderHook(() => useHerosummary(), {
            wrapper: tanStackCustomProvider(),
        })

        // console.log(result);
        expect(result.current.isLoading).toBe(true);
        expect(result.current.isError).toBe(false);
        expect(result.current.data).toBe(undefined);
        expect(result.current.data).toBeUndefined();


    })

    // test('should retuirn succes state with data when API call succeds', async () => {

    //     const { result } = renderHook(() => useHerosummary(), {
    //         wrapper: tanStackCustomProvider(),
    //     })

    //     await waitFor(() => {
    //         expect(result.current.isSuccess).toBe(true);

    //     })
    //     // console.log(result.current);
    //     expect(result.current.isLoading).toBe(false)
    //     expect(result.current.isError).toBe(false)
    //     expect(result.current.data).toStrictEqual({
    //         totalHeroes: 25,
    //         strongestHero: {
    //             id: '1',
    //             name: 'Clark Kent',
    //             slug: 'clark-kent',
    //             alias: 'Superman',
    //             powers: expect.any(Array),
    //             description: 'El Último Hijo de Krypton, protector de la Tierra y símbolo de esperanza para toda la humanidad.',
    //             strength: 10,
    //             intelligence: 8,
    //             speed: 9,
    //             durability: 10,
    //             team: 'Liga de la Justicia',
    //             image: '1.jpeg',
    //             firstAppearance: '1938',
    //             status: 'Active',
    //             category: 'Hero',
    //             universe: 'DC'
    //         },
    //         smartestHero: {
    //             id: '2',
    //             name: 'Bruce Wayne',
    //             slug: 'bruce-wayne',
    //             alias: 'Batman',
    //             powers: expect.any(Array),
    //             description: 'El Caballero Oscuro de Ciudad Gótica, que utiliza el miedo como arma contra el crimen y la corrupción.',
    //             strength: 6,
    //             intelligence: 10,
    //             speed: 6,
    //             durability: 7,
    //             team: 'Liga de la Justicia',
    //             image: '2.jpeg',
    //             firstAppearance: '1939',
    //             status: 'Active',
    //             category: 'Hero',
    //             universe: 'DC'
    //         },
    //         heroCount: 18,
    //         villainCount: 7
    //     },)
    // })


    test('should retuirn succes state with data when API call succeds version two', async () => {

        
        const mockSummaryData = {
            totalHeroes: 10,
            strongestHero: {
                id: '1',
                name: 'superman'
            },
            smartestHero: {
                id: '2',
                name: 'Batman'
            },
            heroCount: 4,
            villainCount: 10
        } as any
        
        mockGetSummaryAction.mockResolvedValue(mockSummaryData)
        
        const { result } = renderHook(() => useHerosummary(), {
            wrapper: tanStackCustomProvider(),
        })
        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true);

        })
        // console.log(result.current);


      
    })

    test('should return error state when API call false', async() =>{

        const mockError = new Error('Failed to fetch summary');
        mockGetSummaryAction.mockRejectedValue(mockError);

           const { result } = renderHook(() => useHerosummary(), {
            wrapper: tanStackCustomProvider(),
        })

        await waitFor(() => {
            expect(result.current.isError).toBe(true);

        })

        expect(result.current.error).toBeDefined();
        expect(result.current.isLoading).toBe(false);

    })


})