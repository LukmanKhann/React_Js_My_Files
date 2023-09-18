
import { useState } from "react"
const Hwork = ()=>{
    let [add,setAdd] =useState(1)
    let [substract,setSubstract] = useState(1)
    let [reset,setReset] = useState(0)
    let addition =()=>{
        setAdd(add + substract)
    }
     let substraction =()=>{
        setAdd(add - substract)
    } 
    let resetValue =()=>{
        setAdd(reset)
    }
    return(
        <div>
            {add}
            <button onClick={addition}>Increment</button> <br /> <br />
            <button onClick={substraction}>Decrement</button>  <br /> <br />
            <button onClick={resetValue}>Reset</button>
        </div>
    )
}
export default Hwork