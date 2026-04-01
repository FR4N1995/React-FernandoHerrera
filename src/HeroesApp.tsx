import React from 'react'
import { RouterProvider } from 'react-router'
import { appRouter } from './router/app.router'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { FavoritesHEroProvider } from './heroes/context/FavoritesHEroContext'


const queryClient = new QueryClient()

export const HeroesApp = () => {
  return (
        <QueryClientProvider client={queryClient}>
            <FavoritesHEroProvider>
              <RouterProvider router={appRouter} />
              
              <ReactQueryDevtools initialIsOpen={false} />
            </FavoritesHEroProvider>
        </QueryClientProvider>
  )
}
