import React, { useState } from 'react'

const useCounter = () => {

        const [ counter, setCounter] = useState(5);
    
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

export default useCounter