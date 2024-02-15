import React from "react";
import Component1 from "./Component1.js";
import Component2 from "./Component2.js";
import Component3 from "./Component3.js";

function UsContextParent(){
    return(
        <div>
            From UsContextParent

            <Component1/>
            <Component2/>
            <Component3/>
        </div>
    )
}

export default UsContextParent;