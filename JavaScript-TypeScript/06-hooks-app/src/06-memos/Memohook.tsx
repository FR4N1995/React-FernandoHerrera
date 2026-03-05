import { useCallback, useState } from "react";
import MyTitle from "./ui/MyTitle";
import MySubTitle from "./ui/MySubTitle";

export const MemoHook = () =>{


const [title, setTitle] = useState('Hola');
const [subtitle, setSubTitle] = useState('Mundo')


const handleMyApiCall = useCallback(() =>{
    console.log('llmar mi api', subtitle)
}, [subtitle])

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-init text-white">
                MemoApp 
            </h1>
            
            <MyTitle title={title}/>
            <MySubTitle subtitle={subtitle} callMyApi={handleMyApiCall}/>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setTitle('Hello' + new Date().getTime())}
            >
                Cambiar titulo
             </button>

            <button className ="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setSubTitle('World')}
            > 
                cambiar subtitulo 
            </button>
        
        </div>
    );

}