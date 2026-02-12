import { useState } from 'react'

const useCounter = (initialValue: number = 5) => {

        const [ counter, setCounter] = useState(initialValue);
    
        const handleAdd = () =>{
            setCounter(counter +1);
        }
    
        const handleSubstract = () => {
            setCounter(counter -1);
        }
    
        const handleReset = () =>{
            setCounter(5);
        }
    


  return {
    counter,
    handleAdd,
    handleSubstract,
    handleReset
  }
}

export{

    useCounter
} 