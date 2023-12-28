import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const[number,Setnumber] = useState([0,1]);
    const handler = () =>{
        let temp = number.reverse();
        Setnumber([...temp]);
    }
    useEffect(()=>{console.log(number);},[number]);
    return(
        <div>
            <br></br>
            <div>{number[0]}</div>
            <button onClick={handler}>UseEffect Changer</button>
        </div>
    )
}

export default UseEffect;