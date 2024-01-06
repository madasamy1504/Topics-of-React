import React, { useCallback, useMemo, useState } from "react";
import HOrder from "./HigherOrder";


export default function Memofn(){
    const[count,SetCount] = useState(0);
    const[data,SetData] = useState("Js");

    let render = useMemo(()=>{
        return(
            <div style={{color:'red'}}>Data : {data} <br></br> {count}</div>
        )
    },[data]);

    let propsMethod = useCallback(() => {
        console.log("From parent");
    },[data])
    return(
        <div>
            {render}
            <button onClick={()=>{SetData("Javascript")}}>UseMemo Btn</button><br></br><br></br>
            <div>count: {count}</div>
            <button onClick={()=>{SetCount(count+1)}}>Counter</button>

            <HOrder method = {propsMethod} data={data} />


        </div>
    )

}