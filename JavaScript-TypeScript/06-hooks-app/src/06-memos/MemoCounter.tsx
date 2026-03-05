import useCounter from '@/hooks/useCounter'
import React, { useMemo } from 'react'

const heavtStuff = (iterationNumer: number) =>{
    console.time('heavy_stuff_started');
    for (let index = 0; index < iterationNumer; index++) {
       console.log('ahi vamos...')
        
    }

    console.timeEnd('heavy_stuff_started')
    return `${iterationNumer} iteraciones realizadas`;

}



const MemoCounter = () => {

    const {counter, increment} = useCounter(40000)
    const {counter: counter2, increment: increment2} = useCounter(10)

    const myHeavyValue = useMemo(() => heavtStuff(counter), [counter])

  return (
    <div className='bg-gradient flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Memo- UseMemo - {myHeavyValue}</h1>
        <hr />


        <h4 className=''>
            Counter:  {counter}
        </h4>
        <h4 className=''>
            Counter2:  {counter2}
        </h4>

        <button
        className='bg-blue-500 text-white px-4 rounded-md py-2 px-1'
         onClick={increment}>
            +1
        </button>
        <button
        className='bg-blue-500 text-white px-4 rounded-md py-2 px-1'
         onClick={increment2}>
            +1
        </button>

    </div>
  )
}

export default MemoCounter