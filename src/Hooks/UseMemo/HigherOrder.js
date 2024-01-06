import React, { useEffect } from "react";

 function HOrder(props){
    const{temp,method} = props;
    useEffect(()=>{
     console.log("Higher order re-renderd");   
    })
    return(
        <div><br></br>Higher order Please check console</div>
    )
}

export default React.memo(HOrder);

