import { useState } from "react"
import Hoc from "./Hoc"
const A = (prop) => {
    console.log(prop)
    // let [count,setCount] = useState(0)
    // let incre = ()=>{
    //     setCount(count+1)
    // }
    return(
        <div> 
            {prop.data}
            <button onClick={prop.fun}>increment</button>

        </div>
    )
}
export default Hoc(A)