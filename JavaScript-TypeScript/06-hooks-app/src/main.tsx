import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import HooksApp from './HooksApp'
// import { TrafficLight } from './01-useState/TrafficLight';
// import { TrafficLightwithUseEfect } from './02-useEfect/TrafficLightwithUseEfect';
// import { TrafficLightwithHook } from './02-useEfect/TrafficLightwithHook';
// import { PokemonPage } from './03-examples/PokemonPage';
// import FocusScreen from './04-useRef/FocusScreen';
import { TasksApp } from './05-useReduce/TaskApp';
import { ScrambleWords } from './05-useReduce/reduce/ScrambleWords';
import {MemoHook} from './06-memos/Memohook'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      {/* <HooksApp /> */}
      {/* <TrafficLight /> */}
      {/* <TrafficLightwithUseEfect /> */}
      {/* <TrafficLightwithHook /> */}
      {/* <PokemonPage /> */}
      {/* <FocusScreen /> */}
      {/* <TasksApp /> */}
      {/* <ScrambleWords /> */}
      < MemoHook />
  </StrictMode>,
)
