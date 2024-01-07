import {useState,useEffect} from "react";


const useFetch = (url) => {
    const [data,SetData] = useState(null);
    
        let a = () =>{
            fetch(url)
        .then((res) => res.json())
        .then((data) => SetData(data));
        }
        a();
    
    return data;
};
export default useFetch;


