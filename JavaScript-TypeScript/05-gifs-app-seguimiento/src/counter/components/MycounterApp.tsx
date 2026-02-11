import useCounter from '../hooks/useCounter';

export const MycounterApp = () => {
    // lo hicimos un custom hook
    // const [ counter, setCounter] = useState(5);
    // const handleAdd = () =>{
    //     setCounter(counter +1);
    // }
    // const handleSubstract = () => {
    //     setCounter(counter -1);
    // }
    // const handleReset = () =>{
    //     setCounter(5);
    // }
    const {counter, handleAdd, handleSubstract, handleReset} = useCounter()
    


  return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>Counter: {counter}</h1>
            
            <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>Reset</button>
            </div>
        </div>
  )
}
