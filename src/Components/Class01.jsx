import { useRef } from "react"
import { useState } from "react"

const Class01 = ()=>{
    let num1 = useRef()
    let num2 = useRef()
    let [result,setResult] = useState(0)
    const addition = ()=>{
        let a = num1.current.value
        let b = num2.current.value
        setResult(a+b)
    }
    const substract = ()=>{
        let a = num1.current.value
        let b = num2.current.value
        setResult(a-b)
    }
    const multiplication = ()=>{
        let a = num1.current.value
        let b = num2.current.value
        setResult(a*b)
    }
    


    return(
        <div>
            <label htmlFor="">Number1</label>
            <input type="number" name="" id="" ref={num1}/> <br />
             <label htmlFor="">Number2</label>
            <input type="number" name="" id="" ref={num2}/> 
            <button onClick={addition}>+</button> 
            <button onClick={substract}>-</button> 
            <button onClick={multiplication}>*</button>
            <h1>{result}</h1>
            



        </div>
    )
}
export default Class01