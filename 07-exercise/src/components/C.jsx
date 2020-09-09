import React, {useContext} from "react";
import MyContext from "../Context/mycontext";

export default function C(props) {
    const { X, setX, Y, setY } = useContext(MyContext);
    return (
        <div>
        <h2>Component C, y = {Y}</h2>
        <button onClick={()=>setX(X+1)}>Increment X</button>
    </div>
  );
}
