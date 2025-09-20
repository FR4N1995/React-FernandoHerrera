import { useState } from "react";


import './ItemCounter.css';
interface Props {
    name: string,
    quantity?: number
}


// donde esta name y quantity estamos desestructurando
export const ItemCounter = ({name, quantity = 1}:Props) => {

  const [ count, setCount] = useState(quantity);

  const handleAdd = () =>{  
      setCount(count + 1);

  }

  const handleRest = () =>{
    if(count === 1){
      return;
    }
    setCount(count - 1)
  }

  const handleClick = () =>{
    console.log(`click ${name}`);
  }

  return (
    <section 
    className="item-row"
    //  style={{    
    //   display: 'flex',
    //   alignItems: 'center',
    //   gap: 10,
    //   marginTop: 10
    //  }}
    >
        <span className="item-text" style={{color: count === 1 ? 'red' : 'black'}}>{name}</span>
        <button
        onClick={handleRest}
        >-1</button>
        <span>{count}</span>
        <button
        onClick={() =>{
          handleAdd();
        }}
        >+1</button>
    </section>
  )
}


