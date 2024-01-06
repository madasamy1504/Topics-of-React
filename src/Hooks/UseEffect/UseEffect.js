import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const[number,Setnumber] = useState([0,1]);
    const handler = () =>{
        let temp = number.reverse();
        Setnumber([...temp]);
    }
    useEffect(()=>{
        console.log(number);
        return ()=>{
            console.log("CleanUp Function");
        }
    });
    return(
        <div>
            <br></br>
            <h2>UseEffect Child {new Date().getMilliseconds()}</h2>
            <div>{number[0]} {new Date().getMilliseconds()}</div>
            <button onClick={handler}>UseEffect Changer</button>

        </div>
    )
}

export default UseEffect;



// Case1:  UseEffect(()=>{})    ====>   initial render and re-render once any state updated
// Case2:  UseEffect(()=>{},[])    ====>   initial render and Not re-rendering if any state updated
// Case3:  UseEffect(()=>{},[state1,state3])    ====>   initial render and re-render once mentioned state updated