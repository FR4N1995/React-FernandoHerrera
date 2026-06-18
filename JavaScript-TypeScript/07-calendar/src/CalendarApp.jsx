import React from 'react'
import { AppRoutes } from './routes'
import { BrowserRouter } from 'react-router'

export const CalendarApp = () => {
  return (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
  )
}
