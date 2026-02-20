
import { useEffect, useState } from "react"
import useTraficLigtht from "../hooks/useTraficLigtht";

export const TrafficLightwithHook = () => {
  
   const {countdown, colores, light} = useTraficLigtht();

   
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-white text-3xl font-thin">Semaforo con UseEffect</h1>
        <h2 className="text-white text-2xl">Countdown - {countdown}</h2>

          <div className="w-64 bg-gray-700 rounded-full h-2">
               <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
                style={{width: `${(countdown/5) * 100}%`}}
               ></div>
          </div>
        
        <div className={`w-32 h-32 ${light === 'red' ? colores[light]  : 'bg-gray-500' } rounded-full`}></div>


        <div className={`w-32 h-32 ${light === 'yellow' ? colores[light] : 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${light === 'green' ? colores[light] : 'bg-gray-500'} rounded-full`}></div>

        {/* Botón para cambiar el estado de la luz */}
        {/* <div className="flex gap-2">
          <button
            className={`bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer`}
       
            >
            Rojo
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer"
          
            >
            Amarillo
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
          
            >
            Verde
          </button>
        </div> */}
      </div>
    </div>
  );
};