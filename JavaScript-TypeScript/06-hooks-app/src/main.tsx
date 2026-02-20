import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HooksApp from './HooksApp'
import { TrafficLight } from './01-useState/TrafficLight';
import { TrafficLightwithUseEfect } from './02-useEfect/TrafficLightwithUseEfect';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      {/* <HooksApp /> */}
      {/* <TrafficLight /> */}
      <TrafficLightwithUseEfect />
  </StrictMode>,
)
