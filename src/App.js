import "./App.css";
import Body from "./components/Body";
import Navebar from "./components/Navebar";
import { useContext } from "react";
import { Themcontext } from "./context/Themcontext";


function App() {
  const { islight } = useContext(Themcontext );

  return (
    <div className={`App ${islight ? "Light" : "dark"}`}>
     
       
          
            {/* <Todo/> */}
            <Navebar />
            <Body />
          
        
     </div>
  );
}

export default App;
