import React, { useState } from "react";
import UseSateObject from "./UseSateObject";
import UseStateArray from "./UseStateArray";

function Usestateparent(){

    return(
        <div>
            <h1>1.UseState</h1>
            <UseSateObject/>
            <UseStateArray/>
        </div>
    )
}

export default Usestateparent;