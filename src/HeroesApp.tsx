import React from 'react'
import { RouterProvider } from 'react-router'
import { appRouter } from './router/app.router'
import {QueryClient} from '@tanstack/react-query'


const queryClient = new QueryClient()

export const HeroesApp = () => {
  return (
        <>
        <RouterProvider router={appRouter} />
        
        </>
  )
}
