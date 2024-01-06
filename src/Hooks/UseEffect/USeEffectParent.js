import React, { useState } from "react";
import UseEffect from "./UseEffect";

export default  function USeEffectParent(){
    const[toggle,SetToggle] = useState(true);

    return(
        <div>
            <h1>2.UseEffect</h1>
            <button onClick={()=>{SetToggle(!toggle)}}>Use Effect Mount/Unmount</button>
            {toggle ? <UseEffect/> : null}
        </div>
    )
}


//// When render the component UseEffect initially , will print both UseEffect fn and clear fn.

/// Once you unmount that component by Above button, only clear fn will execute, will not execute  UseEffect fn.