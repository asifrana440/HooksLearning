import { useContext } from "react"
import {BioData} from "./ComA"

const ComC = () => {
    const Data =useContext(BioData);
  return (
    
      <h1>Love Alwyas live for {Data}</h1>
    
  )
}

export default ComC
