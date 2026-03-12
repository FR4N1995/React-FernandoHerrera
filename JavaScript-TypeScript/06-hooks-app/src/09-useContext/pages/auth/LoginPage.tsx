import { Usercontext } from '@/09-useContext/context/Usercontext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';

export const LoginPage = () => {
   const {login} = useContext(Usercontext)
  const [userId, setUserId] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) =>{
    event.preventDefault();

    const resolve = login(+userId)
    if(!resolve){
      toast.error('Usuario no encontrado');
      return
    }

    navigate('/profile')

  }


  return (
    <div className="flex flex-col items-center min-h-screen">


      <h1 className="text-4xl font-bold">Iniciar Sesion</h1>
      <hr />

      <form 
      onSubmit={(event) => handleSubmit(event)}
      action="" className='flex flex-col gap-2 my-10'>
        <Input 
        value={userId}
        onChange={(event) => setUserId(event.target.value)}
        type='number' placeholder='Id del usuario' />


        <Button type='submit'>Login</Button>
      </form>
      <Link to={"/about"}>
        <Button variant={'ghost'}>
          volver a la pagina principal
        </Button>

      </Link>

    </div>
  )
}
