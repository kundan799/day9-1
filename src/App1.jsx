import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
const reducer =(counter,action )=>{
    //console.log(action);
  switch(action.type){
    case "INCREMENT":{
      return counter +1;//action.payload
    }
    case "DEDREMENT":{
      return counter -1;//action.payload
    }default:{
        return counter;
    }
  }
}

function App1() {
  const [counter,dispatch]=useReducer(reducer,0)
  return (
    <div className="App">
      counter:{counter}
      <div>
      {/* dispatch({type:"DEDREMENT", payload:1})} */}
      {/* dispatch({type:"INCREMENT", payload:1})} */}
        <button onClick={()=>dispatch({type:"DEDREMENT"})}>-</button>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
      </div>
      
    </div>
  );
}

export default App1;
