//import { useState } from "react";
// Simply Add   and remove button  using useReducer ho



// const [count, setCount] = useState(0);

    
              {/* <p>{count}</p>
              <div className="btn">
                     <button onClick={()=>setCount(count+1)} className="btn1">Add</button>
                     <br />
                     <br />
                     <button onClick={()=>setCount(count-1)} className="btn2">Remove</button>
              </div> */}


import { useReducer } from "react";
import "../App.css";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "CLEAR":
      return 0; // Reset the state to 0
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="container">
        <p>{state}</p>
        <div className="btn">
          <button onClick={() => dispatch({ type: "INCREMENT" })} className="btn1">
            Add
          </button>
          <br />
          <br />
          <button onClick={() => dispatch({ type: "DECREMENT" })} className="btn2">
            Remove
          </button>
          <br />
          <br />
          <button onClick={() => dispatch({ type: "CLEAR" })} className="btn3">
            Clear All
          </button>
        </div>
      </div>
    </>
  );
};

export default UseReducer;

