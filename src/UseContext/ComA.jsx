// context api k zra js compoents m data bajhna hota hai or jo data bajhna hota  usko phla create context krna prhta  phr provider k zra data get krna prhta  hai usko yh export krna prhta hai js m bjhna hota udr ja usecontext create krna hota hai// phr data provide krna hota compC check 
import { createContext } from "react"
import ComB from "./ComB"

const BioData =createContext();

const ComA = () => {

  return (
    <BioData.Provider value={" Asif"}>
   
      <ComB/>
    </BioData.Provider>
    
  )
}

export default ComA
export {BioData};