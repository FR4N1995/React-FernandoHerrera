import { describe, expect, test, vi } from "vitest";
import { appRouter } from "./app.router";
import { RouterProvider, Outlet, createMemoryRouter, useParams } from 'react-router';
import { render, screen } from "@testing-library/react";


vi.mock('@/heroes/pages/home/HomePage', () => ({
    HomePage: () => <div data-testid="home-page"></div>
}))

vi.mock('@/heroes/layouts/HeroesLayout', () => ({
    HeroesLayout: () => <div data-testid="heroes-layout"> <Outlet /></div>
}))


vi.mock('@/heroes/pages/hero/HeroPage', () => ({
    HeroPage: () => {
        const { idSlug } = useParams()

        return (
            <div data-testid="hero-page">heroPage - {idSlug}</div>
        )
    }
}))


vi.mock('@/heroes/pages/search/SearchPage', () => ({
    SearchPage: () => <div data-testid='search'></div>
}))


describe('appRouter', () => {


    test('should be configured as espected', () => {
        // console.log(appRouter.routes);
        expect(appRouter.routes).toMatchSnapshot();


    });


    test('should render home page at root path', () => {
        const router = createMemoryRouter(appRouter.routes, {
            initialEntries: ['/']
        })
        render(<RouterProvider router={router} />)

        // screen.debug()
        expect(screen.getByTestId('home-page')).toBeDefined();
    });

    test('should render hero page at  /heroes/:idslug path', () => {
        const router = createMemoryRouter(appRouter.routes, {
            initialEntries: ['/heroes/superman']
        })
        render(<RouterProvider router={router} />)
        expect(screen.getByTestId('hero-page').innerHTML).toContain('superman');
    })

    test('should render search page at /search path', async () => {
        const router = createMemoryRouter(appRouter.routes, {
            initialEntries: ['/search']
        })
        render(<RouterProvider router={router} />)

        expect(await screen.findByTestId('search')).toBeDefined();

        // screen.debug()

    })

    test('shuld redirct to home page for uknown routes', () => {

        const router = createMemoryRouter(appRouter.routes, {
            initialEntries: ['/id?38274']
        })
        render(<RouterProvider router={router} />)

        // screen.debug()

        expect(screen.getByTestId('home-page')).toBeDefined();

    })



})