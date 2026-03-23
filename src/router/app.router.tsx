
import AdminLayout from '@/admin/layout/AdminLayout'
import { AdminPage } from '@/admin/pages/AdminPage'
import { HeroesLayout } from '@/heroes/layouts/HeroesLayout'
import { HeroPage } from '@/heroes/pages/hero/HeroPage'
import { HomePage } from '@/heroes/pages/home/HomePage'
import { SearchPage } from '@/heroes/pages/search/SearchPage'
import { lazy } from 'react'
import {createBrowserRouter} from 'react-router'

// esto es para que solo se cargue el modulo cuando se necesite;
// const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage'))

export const appRouter = createBrowserRouter([




    {
        path: '/',
        element: <HeroesLayout />,
        children: [

            {
                index : true,
                element: <HomePage />
            },
            {
                path : 'heroes/:idSlug',
                element: <HeroPage />
            },
            {
                path : 'search',
                element: <SearchPage />
            },
        ]
    },

    {
        path: '/admin',
        element: <AdminLayout />,
        children: [

            {
                index: true,
                element: <AdminPage />
            }
        ]
    }




])