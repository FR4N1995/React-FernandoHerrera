import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { GifsApp } from './GifsApp'
// import { MycounterApp } from './counter/components/MycounterApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <h1>Hola mundo</h1> */}
    <GifsApp />
    {/* <MycounterApp /> */}
  </React.StrictMode>,
)
