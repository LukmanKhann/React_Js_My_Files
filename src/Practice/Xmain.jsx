import { useCallback, useState } from "react"
import Xcount from "./Xcount"
import Xbutton from "./Xbutton"

const Xmain = () => {
    let [age,setAge] = useState(25)
    let [sal,setSalary]= useState(5000)
    let increSalary = useCallback(()=>{
        setSalary(sal+5000)
    },[sal])
    let increAge = useCallback(()=>{
        setAge(age +1)
    },[age])
  return (
    
    <div>
        <Xcount data = {age}>Age</Xcount>
        <Xbutton btdata = {increAge}>increAge</Xbutton>
        <Xcount data = {sal}>Sal</Xcount>
        <Xbutton btdata = {increSalary}>increSalary</Xbutton>
      
    </div>
  )
}

export default Xmain
