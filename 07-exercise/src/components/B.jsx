import React, {useContext} from "react";
import MyContext from "../Context/mycontext";


export default function B() {
  const { X, setX, Y, setY } = useContext(MyContext);

  return (
    <div>
      <h2>
      Component B, x = {X}
      </h2>
      <button onClick={() => setY(Y+1)}>Increment Y</button>
    </div>
  );
}
