import { useState } from "react"

const Mul = () => {
    let [num1,setNum1] = useState("")
    let [num2,setNum2] = useState("")
    let [count,setCount] = useState(0)
    let num1Data = (e)=>{
        setNum1(e.target.value)
    }
    let num2Data = (e)=>{
        setNum2(e.target.value)
    }
    let add = ()=>{
        let a = Number(num1)
        let b = Number(num2)
        setCount(a+b)
    }
    let sub = ()=>{
        let a = (num1)
        let b = (num2)
        setCount(a-b)
    }
    let multi = ()=>{
        let a = (num1)
        let b = (num2)
        setCount(a*b)
    }
    
  return (
    <div>
        <h1>{count}</h1>
        <label htmlFor="">Number1</label>
        <input type="text" value={num1} onChange={num1Data} />
        <label htmlFor="">Number2</label>
        <input type="text" value={num2} onChange={num2Data} />
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
        <button onClick={multi}>*</button>
      
    </div>
  )
}


export default Mul