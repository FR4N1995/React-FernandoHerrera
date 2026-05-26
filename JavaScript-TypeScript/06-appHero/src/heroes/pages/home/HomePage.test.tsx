import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { HomePage } from "./HomePage";
import { MemoryRouter } from "react-router";
import usePaginatedHero from "@/heroes/hooks/usePaginatedHero";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FavoritesHEroProvider } from '../../context/FavoritesHEroContext';


vi.mock('@/heroes/hooks/usePaginatedHero')

const mockUserPaginatedHero = vi.mocked(usePaginatedHero)

mockUserPaginatedHero.mockReturnValue({
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
} as unknown as ReturnType<typeof usePaginatedHero>)

const queryClient = new QueryClient();

const renderHomePage = (initialEntries: string[] = ['/']) => {

    return render(
        <MemoryRouter initialEntries={initialEntries}>
            <FavoritesHEroProvider>

                <QueryClientProvider client={queryClient}>

                    <HomePage />
                </QueryClientProvider>
            </FavoritesHEroProvider>
        </MemoryRouter>
    )
}


describe('HomePage', () => {

    beforeEach(() => {
        vi.clearAllMocks();
    })

    test('should render homePage with default values', () => {
        // console.log('hola');
        const { container } = renderHomePage();
        expect(container).toMatchSnapshot();
        // screen.debug()
    });


    test('should call usePagination with default values', () => {

        renderHomePage()
        expect(mockUserPaginatedHero).toHaveBeenCalledWith(1, 10, 'all')
    })
    test('should call usePaginationHero with custom query params', () => {

        renderHomePage(['/?page=2&limit=10&category=villains'])
        expect(mockUserPaginatedHero).toHaveBeenCalledWith(2, 10, 'villains')
    })
    test('should call usePaginatedHero with default page and same limit on tab', () => {

        renderHomePage(['/?tab=favorites&page=2&limit=10'])
        // expect(mockUserPaginatedHero).toHaveBeenCalledWith(2, 10, 'villains')
        const [alltabs, favoriteTab, heroesTab, villainsTab] = screen.getAllByRole('tab');
        fireEvent.click(villainsTab);

        expect(mockUserPaginatedHero).toHaveBeenCalledWith(1, 10, 'villain')
        // screen.debug(villainsTab)
    })


})