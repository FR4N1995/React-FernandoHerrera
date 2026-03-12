import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp } from './FirstStepsApp'
import {AwesomeApp} from './MyAwesomeApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStepsApp />
    {/* <AwesomeApp /> */}
  </StrictMode>,
)
