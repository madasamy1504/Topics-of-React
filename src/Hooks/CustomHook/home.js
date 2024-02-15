import React from "react";

import useFetch from "./useFetch";

export default function Home(){
    
    const data = useFetch("https://jsonplaceholder.typicode.com/todos");
   console.log(data);
//    let arr = [1,2]
    return(
        <>
           {data &&
           data.map((item)=>{
            return <div key={item.id}>{item.title}</div>
            })} 
        </>
    )
}