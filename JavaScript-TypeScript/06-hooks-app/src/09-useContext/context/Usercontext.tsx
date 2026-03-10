import {createContext, useEffect, useState, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data";


// interface UserContextProps {
//     children: React.ReactNode;
// }


type Authstatus = 'cheking' | 'authenticated' | 'not-authentioicated'

interface UserContextProps {
    /* state */
    authStatus: Authstatus;
    user: User | null;
    isAuthenticated: boolean,
    /* metods */
    login: (userId: number) => boolean;
    logout: () => void;
}


export const Usercontext = createContext({} as UserContextProps)

const UsercontextProvider = ({children}: PropsWithChildren) => {

    const [authStatus, setAuthStatus]= useState<Authstatus>('cheking')
    const [user, setUser]= useState<User|null>(null)





    const handleLogin = (userId: number) =>{
        console.log({userId})
        const user = users.find((user) => user.id === userId)

        if(!user){
            console.log(`User not Found! ${userId}`);
            setUser(null)
            setAuthStatus('not-authentioicated')
            return false
        }

        setUser(user);
        setAuthStatus('authenticated');
        localStorage.setItem('userId', userId.toString())
        return true

    }

    const handleLogout = () =>{
        console.log('Cerra Sesion')
        setAuthStatus('not-authentioicated');
        setUser(null);
        localStorage.removeItem('userId')
    
    }

    useEffect(() =>{
        const storageUserID = localStorage.getItem('userId');
        if(storageUserID){
            handleLogin(+storageUserID)
            return
        }
        handleLogout()

    },[])


  return (
    <Usercontext value={{
            authStatus: authStatus,
            isAuthenticated: authStatus === 'authenticated' ? true : false,
            user: user,
            login: handleLogin,
            logout: handleLogout,
        }}
    >
        {children}
    </Usercontext>
    
  )
}

export default UsercontextProvider