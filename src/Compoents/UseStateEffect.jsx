
//chat counter add on screen  
import { useState } from "react"
import AgainHook from "./AgainHook";


const UseStateEffect = () => {
    const [count,setCount] = useState(0);

   AgainHook(count);

  return (
    <div>
      <h1>{count}</h1>
      <div className="btn" onClick= {()=> setCount (count+1)
      }>Click Me</div>
    </div>
  )
}

export default UseStateEffect


















