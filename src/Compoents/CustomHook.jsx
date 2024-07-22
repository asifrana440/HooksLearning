import { useState} from "react";
import "../App.css"
import AgainHook from "./AgainHook";

const CustomHook = () => {
    const [count,setCount] = useState(0);
   // custom hook
   AgainHook(count);
    
  return (
<div>
      <h1>{count}</h1>
      <div className="btn" onClick= {()=> setCount (count+1)
      }>Click Me</div>
    </div>
  )
}

export default CustomHook
