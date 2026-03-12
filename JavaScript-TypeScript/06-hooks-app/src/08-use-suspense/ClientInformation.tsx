import { use, useEffect, type Usable } from "react"
import { getUserAction, type User } from "./API/get-use.action"



interface Props {
    getuser: Usable<User>
}

const ClientInformation = ({getuser}: Props) => {

    const user = use(getuser);


//   useEffect(() =>{
//         getUserAction(id).then(console.log);
//   }, [])


  return (
    <div className='bg-gradient flex flex-col gap-4'>
        <h2 className='text-4xl font-thin text-white'>Francisco - 1234</h2>

        <p className='text-white text-2xl'>Moroleon GTO</p>
        <p className='text-white text-xl'>un rol de usuario</p>

    </div>
  )
}

export default ClientInformation