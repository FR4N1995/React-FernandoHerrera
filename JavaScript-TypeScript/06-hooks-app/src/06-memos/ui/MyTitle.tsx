import React from "react";

interface props {
    title: string;


}



const MyTitle = React.memo(({title}:props) => {
    console.log('my title re render')
  return <h1 className="text-3xl ">{title}</h1>
})

export default MyTitle