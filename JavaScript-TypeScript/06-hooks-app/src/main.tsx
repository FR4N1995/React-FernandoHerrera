import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//! libreria de alertas de sonar
import {Toaster} from 'sonner'

// import HooksApp from './HooksApp'
// import { TrafficLight } from './01-useState/TrafficLight';
// import { TrafficLightwithUseEfect } from './02-useEfect/TrafficLightwithUseEfect';
// import { TrafficLightwithHook } from './02-useEfect/TrafficLightwithHook';
// import { PokemonPage } from './03-examples/PokemonPage';
// import FocusScreen from './04-useRef/FocusScreen';
// import { TasksApp } from './05-useReduce/TaskApp';
// import { ScrambleWords } from './05-useReduce/reduce/ScrambleWords';
// import {MemoHook} from './06-memos/Memohook'
// import MemoCounter from './06-memos/MemoCounter';
// import { InstagromApp } from './07-useOptimistic/InstagromApp';
import ClientInformation from './08-use-suspense/ClientInformation';
import { getUserAction } from './08-use-suspense/API/get-use.action';
import { ProfesionalApp } from './09-useContext/ProfesionalApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
      {/* <HooksApp /> */}
      {/* <TrafficLight /> */}
      {/* <TrafficLightwithUseEfect /> */}
      {/* <TrafficLightwithHook /> */}
      {/* <PokemonPage /> */}
      {/* <FocusScreen /> */}
      {/* <TasksApp /> */}
      {/* <ScrambleWords /> */}
      {/* < MemoHook /> */}
      {/* <MemoCounter /> */}
      {/* <InstagromApp /> */}
      {/* <Suspense
        fallback={
          <div className='bg-gradient flex flex-col'>
              <h1 className='text-2xl'>Cargando...</h1>

          </div>
        }
      >
        <ClientInformation  getuser={getUserAction(1001)}/>

      </Suspense> */}

      <ProfesionalApp />
  </StrictMode>,
)
