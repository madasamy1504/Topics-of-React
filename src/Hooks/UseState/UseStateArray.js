import React,{useState} from "react";

function UseStateArray(){
    const[Data,SetData] = useState([0,1,7]);
    const[Data1,SetData1] = useState([
        {id:1,name1:"Madasamy"},
        {id:2,name1:"Magesh"},
        {id:3,name1:"Manoj"}
    ]); 
    const Changer1 = () =>{
       let temp = [...Data];
       temp[0] = temp[0]+1;
       SetData(temp);
    }
    const Changer2 = () =>{
        let temp = [...Data1];
        temp[0].name1 = temp[1].name1;
       SetData1(temp)
    }

    return(
        <div>
            <br></br>
            <div>{Data[0]}</div>
            <button onClick={Changer1}>ArrayChanger1</button><br></br><br></br>
            <div>{Data1[0].name1}</div>
            <button onClick={Changer2}>ArrayChanger2</button><br></br>
        </div>
    )
}

export default UseStateArray;