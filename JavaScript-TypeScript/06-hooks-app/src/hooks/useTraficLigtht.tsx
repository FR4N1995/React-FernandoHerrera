import { useEffect, useState } from "react";

const useTraficLigtht = () => {

     // type trafficlightColor = 'red' | 'yellow' | 'green';
  type trafficlightColor = keyof typeof colores;
  const [light , setlight] = useState<trafficlightColor>('red');
  const [countdown , setCountdowns] = useState(5);

 
    const colores ={
        red: 'bg-red-500 animate-pulse',
        yellow: 'bg-yellow-500 animate-pulse',
        green: 'bg-green-500 animate-pulse',
    }

    // efecto de contador
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


    // efecto para cambiar de color en el semaforo
    useEffect(() =>{

      if(countdown > 0) return;
      setCountdowns(5);
      if(light === 'red'){
        setlight('green')
      }

      if(light === "green"){
        setlight('yellow')

      }

      if(light === 'yellow'){
        setlight('red') 
      }


    }, [countdown, light])


  return {
    
    countdown,
    colores,
    light
    
}


}

export default useTraficLigtht