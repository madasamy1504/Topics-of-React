import React from "react";

import useFetch from "./useFetch";

export default function Home(){
    
    const data = useFetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8");
    const a = [1,2];
    console.log(data);
    return(
        <div>
            {data.map((item,index)=>{
                return <div key={index}>{item.name} from  {item.city} <br></br></div>
            })}
        </div>
    )
}