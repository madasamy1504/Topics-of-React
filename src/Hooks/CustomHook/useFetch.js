import {useState,useEffect} from "react";


const useFetch = (url) => {
    const [data,SetData] = useState(null);
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>SetData(res))

    },[url])

   

        
    return [data];
    
    
};
export default useFetch;


