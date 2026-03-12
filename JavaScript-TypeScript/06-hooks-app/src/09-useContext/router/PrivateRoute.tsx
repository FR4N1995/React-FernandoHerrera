import React, { use, type JSX } from 'react'
import { Usercontext } from '../context/Usercontext'
import { Navigate } from 'react-router';




interface Props {
    element: JSX.Element, //React.ReactNode

}

export const PrivateRoute = ({element}: Props) => {

    const {authStatus} = use(Usercontext)

    if(authStatus === 'cheking'){
        return <div>Loading...</div>;
    }

    if(authStatus === 'authenticated'){
        return element
    }

  return (
    <Navigate to={'login'} replace />
  )
}
