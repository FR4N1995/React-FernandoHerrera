
import { useEffect, useState } from "react"

export const TrafficLightwithUseEfect = () => {
    const [light , setlight] = useState('red');
    const [countdown , setCountdowns] = useState(5);

    // type trafficlightColor = 'red' | 'yellow' | 'green';
    type trafficlightColor = keyof typeof colores;

 
    const colores ={
        red: 'bg-red-500 animate-pulse',
        yellow: 'bg-yellow-500 animate-pulse',
        green: 'bg-green-500 animate-pulse',
    }


    useEffect( () =>{
        if(countdown === 0) return

        const internalId = setInterval(() =>{
            console.log('setInternal llamado');
            setCountdowns((prev) => prev -1);
        }, 1000)

        return () =>{
            console.log('clenup effect');
            clearInterval(internalId);
        }

        
    }, [countdown])
  
  return (




    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-white text-3xl font-thin">Semaforo con UseEffect</h1>
        <h2 className="text-white text-2xl">Countdown - {countdown}</h2>
        
        
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