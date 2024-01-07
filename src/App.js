import logo from './logo.svg';
import './App.css';
import Usestateparent from './Hooks/UseState/Usestateparent';
import Useref from './Hooks/UseRef/Useref.js';
import USeEffectParent from './Hooks/UseEffect/USeEffectParent.js';
import UseMemoParent from './Hooks/UseMemo/UseMemoParent.js';
import Home from './Hooks/CustomHook/home.js';

function App() {
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


     <hr></hr>
    <Home/>
     <br></br><hr></hr><br></br>

    </div>
  );
}

export default App;
