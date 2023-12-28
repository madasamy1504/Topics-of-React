import React, { useRef } from "react";

const Useref = () => {
    let Colochange = useRef([]),
    color = ["#CD5C5C","#000","#DFFF00","#40E0D0"],
    colorChanger = () =>{
       
        let random = Math.floor(Math.random()*color.length);
        Colochange.current[0].style.color = color[random];
    },
    colorChanger1 = () =>{
       
        let random = Math.floor(Math.random()*color.length);
        Colochange.current[1].style.color = color[random];
    };

    const getEle = (el) => {
        Colochange.current.push(el);
        console.log(Colochange);
    }
    console.log(Colochange);
    return(
        <div>
            <div ref={getEle}>Change my color</div><br></br>
            <div ref={getEle}>Change my color</div><br></br>
            <button onClick={colorChanger}>Chnage color1</button>
            <button onClick={colorChanger1}>Chnage color2</button>
            
        </div>
    )
}

export default Useref;