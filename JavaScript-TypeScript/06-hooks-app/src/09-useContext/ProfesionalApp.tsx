import React from 'react'
import { RouterProvider } from 'react-router'
import { appRouter } from './router/app.router'
import UsercontextProvider from './context/Usercontext'

export const ProfesionalApp = () => {
  return (
    <UsercontextProvider>

    <div className='bg-gradient flex flex-col'>
        <RouterProvider router={appRouter} />
    </div>
    
    </UsercontextProvider>
  )
}
