import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { GifsApp } from './GifsApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <h1>Hola mundo</h1> */}
    <GifsApp />
  </React.StrictMode>,
)
