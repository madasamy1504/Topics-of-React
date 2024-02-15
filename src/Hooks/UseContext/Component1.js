import React, { useContext } from "react";
import { Context } from "../../App";


function Component1(){
  
   const b = useContext(Context);
    return(
        <div>
            From Component1  <span style={{color:'red'}}>{b}</span>
        </div>
    )
}

export default Component1;