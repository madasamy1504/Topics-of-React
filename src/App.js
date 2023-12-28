import logo from './logo.svg';
import './App.css';
import Usestateparent from './Hooks/UseState/Usestateparent';
import UseEffect from './Hooks/UseEffect/UseEffect';
import Useref from './Hooks/UseRef/Useref.js';

function App() {
  return (
    <div className="App">
     <Usestateparent/>
     <UseEffect/>
     <Useref/>
    </div>
  );
}

export default App;
