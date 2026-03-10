import { Usercontext } from '@/09-useContext/context/Usercontext'
import { Button } from '@/components/ui/button'
import { use } from 'react'
import { Link } from 'react-router'

export const AboutPages = () => {

  const {isAuthenticated, logout} = use(Usercontext)


  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-4xl font-bold'>Pagina sobre mi</h1>
          <hr />
        <div className='flex flex-col gap-2'>
            {/* perfil de usario si tiene sesion */}

            {isAuthenticated && (
              <Link to="/profile" className='hover:text-blue-500 underline text-2xl'>Perfil</Link>

            )}


            {/* iniciar sesion / cerrar sesion */}
            {isAuthenticated ? (
              <Button variant={'destructive'} className='mt-4' onClick={logout}>
                Salir
              </Button>
            ) : (
              <Link to="/login" className='hover:text-blue-500 underline text-2xl'>iniciar Sesion</Link>
              
            )}

        </div>

    </div>
  )
}
