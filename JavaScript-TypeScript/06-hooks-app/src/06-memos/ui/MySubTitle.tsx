import React from 'react'



interface Props {
    subtitle: string;
    callMyApi: () => void
}

const MySubTitle = React.memo(({subtitle, callMyApi}: Props) => {

    console.log('mySubtitle re-render')
    console.log('Tarea super Pesada');
  return (
    <>
    <h6 className='text-2xl font-bold'>{subtitle}</h6>

    <button className='bg-indigo-500 text-white py-1 px-2 rounded-md cursor-pointer'
        onClick={callMyApi} 
    >
        llamar a funcion
    </button>
    
    </>
  )
})

export default MySubTitle