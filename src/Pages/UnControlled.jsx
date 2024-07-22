// useRef and Usestate hooks are use and  manage the data input and save
import { useRef ,useState} from "react"
import "../App.css"

const UnControlled = () => {
    // it like a usestate only and its preserve the value ,no rerender
    const luckyName =useRef(null)
    const [show , setShow] = useState(false);
    const submitForm =(e)=>{
        e.preventDefault();
        const name =luckyName.current.value
        name===""? alert("plz fill the data"):setShow(true)
    }
  return (
    <div> 
          <form action="" onSubmit={submitForm}>
                <div>
                      <label htmlFor="luckyName">Enter your luckyName  </label> <br />
                      <input type="text" id="luckyName" ref={luckyName} />
                </div>
                <br />
                <button className="btn">Submit</button>
          </form>
          <p>{ show ?`Your lucky name ${luckyName.current.value}` : ""}</p>

    </div>
  )
}

export default UnControlled