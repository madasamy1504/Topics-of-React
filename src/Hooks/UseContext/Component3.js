import React, { useContext } from "react";
import { Context } from "../../App";
function Component3(){
    const a = useContext(Context);
    return(
        <div>
            From Component3 {a[1]}
            <button onClick={()=>{a[0]()}}>click me</button>
        </div>
    )
}

export default Component3;