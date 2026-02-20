import { useState } from "react"

export const TrafficLight = () => {
    const [light , setlight] = useState('red');

    // type trafficlightColor = 'red' | 'yellow' | 'green';
    type trafficlightColor = keyof typeof colores;

 
    const colores ={
        red: 'bg-red-500 animate-pulse',
        yellow: 'bg-yellow-500 animate-pulse',
        green: 'bg-green-500 animate-pulse',
    }

    const handleClickstate = (color: trafficlightColor) =>{
        // setlight(color);

        setlight((prev) =>{
            console.log({prev})
            return color
        })
    }

  return (




    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        
        
        <div className={`w-32 h-32 ${light === 'red' ? colores[light]  : 'bg-gray-500' } rounded-full`}></div>


        <div className={`w-32 h-32 ${light === 'yellow' ? colores[light] : 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${light === 'green' ? colores[light] : 'bg-gray-500'} rounded-full`}></div>

        {/* Botón para cambiar el estado de la luz */}
        <div className="flex gap-2">
          <button
            className={`bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer`}
              onClick={ () =>{
                handleClickstate('red')
            }}
            >
            Rojo
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={ () =>{
                handleClickstate('yellow')
            }}
            >
            Amarillo
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
              onClick={ () =>{
                handleClickstate('green')
            }}
            >
            Verde
          </button>
        </div>
      </div>
    </div>
  );
};