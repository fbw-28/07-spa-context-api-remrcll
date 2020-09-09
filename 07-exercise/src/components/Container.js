import React,{useState} from 'react'
import MyContext from "../Context/mycontext"

export default function Container(props) {

    const [Y, setY] = useState(13);
    const [X, setX] = useState(10);

    return (
       <MyContext.Provider value={{X,setX,Y,setY}}>
                {props.children}
       </MyContext.Provider>
    )
}
