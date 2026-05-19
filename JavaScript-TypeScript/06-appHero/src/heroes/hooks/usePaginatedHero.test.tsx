import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import type { PropsWithChildren } from "react";
import { beforeEach, describe, expect, test } from "vitest";
import usePaginatedHero from "./usePaginatedHero";

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

describe('usePaginatedHero', () =>{
    
  

    test('should return the initial state (isLoading)', () =>{

         const { result } = renderHook(() => usePaginatedHero(1, 6), {
            wrapper: tanStackCustomProvider(),
        })


         expect(result.current.isLoading).toBe(true);
        expect(result.current.isError).toBe(false);
        expect(result.current.data).toBe(undefined); 
        expect(result.current.data).toBeUndefined();

    })

    test('should return success state with data when API call succeeds', async() =>{

          const { result } = renderHook(() => usePaginatedHero(1, 6), {
            wrapper: tanStackCustomProvider(),
        })

        await waitFor(()=>{
            expect(result.current.isSuccess).toBe(true);
        })

        expect(result.current.isLoading).toBe(false);


    })

    test('should return call getHeroesByPageAction with argunmnents', () =>{

        const { result } = renderHook(() => usePaginatedHero(1, 6, 'heroes'), {
            wrapper: tanStackCustomProvider(),
        })


        // console.log(result.current)



    })



})