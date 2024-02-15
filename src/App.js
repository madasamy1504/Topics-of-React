import logo from './logo.svg';
import './App.css';
import Usestateparent from './Hooks/UseState/Usestateparent';
import Useref from './Hooks/UseRef/Useref.js';
import USeEffectParent from './Hooks/UseEffect/USeEffectParent.js';
import UseMemoParent from './Hooks/UseMemo/UseMemoParent.js';
import UsContextParent from "./Hooks/UseContext/UsContextParent.js";
import { createContext, useState } from 'react';

// import Home from './Hooks/CustomHook/home.js';
export const Context = createContext(null);



function App() {

  const[data,Setdata] = useState("Madasamy")
  const popup = () =>{
    alert("hi");
    Setdata("Magesh");
  }
  
  return (
    <div className="App">

     <br></br><hr></hr>
     <Usestateparent/>
     <br></br><hr></hr><br></br>

     <hr></hr>
     <USeEffectParent/>
     <br></br><hr></hr><br></br>

     <hr></hr>
     <Useref/>
     <br></br><hr></hr><br></br>

     <hr></hr>
    <UseMemoParent/>
     <br></br><hr></hr><br></br>


    <Context.Provider value={[popup,data]}>
    <UsContextParent/>

    <br></br><hr></hr><br></br>
    
    </Context.Provider>
     

    </div>
  );
}

export default App;
