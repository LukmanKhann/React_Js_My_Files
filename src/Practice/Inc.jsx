import { useState } from "react"

const Inc = ()=>{
    let [num1,setNum1] = useState(1)
    // let [num2,setNum2] = useState(1)
    let add = ()=>{
        setNum1(num1 + 1)
    }
    let sub = ()=>{
        setNum1(num1 - 1)
    }
    // let multi = ()=>{
    //     setNum1(num1 * num2)
    // }
    return(
        <div>
            {num1}
            
            <button onClick={add}>Increment</button>
            <button onClick={sub}>Decrement</button>
         

        </div>
    )
}
export default Inc